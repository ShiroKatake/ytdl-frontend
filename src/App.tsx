import { useState } from "react";
import "./App.css";
import { Button, Card, FormatList, TextInput } from "./components";
import { getInfos, getSuggestions, downloadFileFromUrl, getPlaylist } from "./utils/API";
import {
  host,
  websocketProtocol,
  isYtUrl,
  isYtList,
  getDownloadUrl,
  isJson,
  isUid,
  waitForOpenConnection,
  toMB,
  removeYoutubeAutoNaming,
} from "./utils/helpers";
import { ProgressBar } from "react-bootstrap";

const App = () => {
  const [inputText, setInputText] = useState("");

  const [downloadFormat, changeDownloadFormat] = useState("mp4");
  const setDownloadFormat = (format: string) => {
    localStorage.setItem("format", format);
    changeDownloadFormat(format);
  };

  const [suggestions, setSuggestions] = useState<any>([]);
  const [playlist, setPlaylist] = useState<any>([]);
  const [currentVideoInfo, setCurrentVideoInfo] = useState<any>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [hidden, setHidden] = useState(true);

  const [downloaded, setDownloaded] = useState(0);
  const [totalSize, setTotalSize] = useState(1);

  const checkInput = async () => {
    setIsLoading(true);
    if (isYtUrl(inputText)) {
      await download(inputText);
    } else if (isYtList(inputText)) {
      fetchPlaylist();
    } else {
      await fetchSuggestions();
    }
    setIsLoading(false);
  };

  const fetchSuggestions = async () => {
    try {
      const { data, success } = await getSuggestions(inputText);
      if (success) {
        setSuggestions(data);
        setPlaylist([]);
        setCurrentVideoInfo(undefined);
      }
    } catch (err) {}
  };

  const fetchPlaylist = async () => {
    try {
      const { data, success } = await getPlaylist(inputText);
      if (success) {
        setPlaylist(data.items);
        setSuggestions([]);
        setCurrentVideoInfo(undefined);
      }
    } catch (err) {}
  };

  const download = async (videoId: string) => {
    setIsLoading(true);
    setHidden(false);
    const videoUrl = videoId || inputText;
    if (!videoUrl) return;
    const { data, success } = await getInfos(videoUrl);
    if (success) {
      const downloadUrl = getDownloadUrl(videoUrl, downloadFormat);

      // Create WebSocket connection.
      const socket = new WebSocket(`${host.replace(/^https?/i, websocketProtocol)}`);

      let uid = "";

      // Listen for messages
      socket.addEventListener("message", event => {
        if (isUid(event.data)) {
          uid = isUid(event.data);
        }
        if (isJson(event.data)) {
          const downloadProgress = JSON.parse(event.data);
          setDownloadProgress((downloadProgress.downloaded / downloadProgress.total) * 75);
          setDownloaded(downloadProgress.downloaded);
          setTotalSize(downloadProgress.total);
        }
      });

      if (socket.readyState !== socket.OPEN) {
        try {
          await waitForOpenConnection(socket);
          socket.send(uid);
        } catch (err) {
          console.error(err);
        }
      } else {
        socket.send(uid);
      }

      setCurrentVideoInfo(data.videoDetails);
      const filename = `${removeYoutubeAutoNaming(data.videoDetails.author.name)} - ${data.videoDetails.title}.${downloadFormat}`;
      console.log("Starting download . . .");
      await downloadFileFromUrl(downloadUrl, uid, setDownloadProgress, filename);
      setIsLoading(false);
      setTimeout(() => {
        setHidden(true);
        setDownloadProgress(0);
      }, 5000);
    }
  };

  const progressText = (downloadProgress: number) => {
    let text = `Fetching . . . ${toMB(downloaded)}MB / `;
    if (downloadProgress > 75) {
      text = "Preparing download . . . ";
    }
    if (downloadProgress === 100) {
      text = "Ready! ";
    }
    return text + `${toMB(totalSize)}MB`;
  };

  return (
    <>
      <section className="search-section">
        <TextInput inputText={inputText} setInputText={setInputText} />
        <ProgressBar
          hidden={hidden}
          striped
          variant="success"
          now={downloadProgress}
          label={progressText(downloadProgress)}
          style={{ width: "100%", height: "30px", lineHeight: "30px" }}
        />
        <FormatList
          downloadFormat={localStorage.getItem("format") ? localStorage.getItem("format") : downloadFormat}
          setDownloadFormat={setDownloadFormat}
        />
        <Button main isLoading={isLoading} onClick={checkInput}>
          Search
        </Button>
      </section>
      {currentVideoInfo && (
        <section className="downloading-section">
          <div>
            <h2>{removeYoutubeAutoNaming(currentVideoInfo.author.name) + " - " + currentVideoInfo.title}</h2>
            <br />
            <img src={`https://i.ytimg.com/vi/${currentVideoInfo.videoId}/hqdefault.jpg`} alt={currentVideoInfo.title} />
          </div>
        </section>
      )}
      <section className="suggestions-section">
        {!!suggestions.length && <h1>Suggestions</h1>}
        <Card suggestions={suggestions} isLoading={isLoading} download={download} />
      </section>
      <section className="playlist-section">
        {!!playlist.length && <h1>Suggestions</h1>}
        <Card suggestions={playlist} isLoading={isLoading} download={download} />
      </section>
    </>
  );
};

export default App;
