import { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, FormatList, Playlist, TextInput } from "./components";
import { getInfos, getSuggestions, downloadFileFromUrl, getPlaylist } from "./utils/API";
import {
  host,
  websocketProtocol,
  getYtUrl,
  isYtList,
  generateDownloadUrl,
  isJson,
  isUid,
  generateProgressText,
  waitForOpenConnection,
} from "./utils/helpers";
import { ProgressBar } from "react-bootstrap";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [downloadFormat, setDownloadFormat] = useState(localStorage.getItem("format") ? localStorage.getItem("format")! : "mp4");

  const [suggestions, setSuggestions] = useState<any>([]);
  const [currentVideoInfo, setCurrentVideoInfo] = useState<any>(null);

  const [playlistInfo, setPlaylistInfo] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [hidden, setHidden] = useState(true);

  const [downloaded, setDownloaded] = useState(0);
  const [totalSize, setTotalSize] = useState(1);

  useEffect(() => {
    localStorage.setItem("format", downloadFormat);
  }, [downloadFormat]);

  const checkInput = async () => {
    setIsLoading(true);
    const ytId = getYtUrl(inputText);
    if (ytId) {
      await download(ytId);
    } else if (isYtList(inputText)) {
      await fetchPlaylist();
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
        setPlaylistInfo([]);
        setCurrentVideoInfo(undefined);
      }
    } catch (err) {}
  };

  const fetchPlaylist = async () => {
    try {
      const { data, success } = await getPlaylist(inputText);
      if (success) {
        setPlaylistInfo(data);
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
      const downloadUrl = generateDownloadUrl(videoUrl, downloadFormat);

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
      const filename = `${data.videoDetails.title}.${downloadFormat}`;

      console.log("Starting download . . .");
      await downloadFileFromUrl(downloadUrl, uid, setDownloadProgress, filename);

      setIsLoading(false);
      setTimeout(() => {
        setHidden(true);
        setDownloadProgress(0);
      }, 5000);
    }
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
          label={generateProgressText(downloadProgress, downloaded, totalSize)}
          style={{ width: "100%", height: "30px", lineHeight: "30px" }}
        />
        <FormatList downloadFormat={downloadFormat} setDownloadFormat={setDownloadFormat} />
        <Button main isLoading={isLoading} onClick={checkInput}>
          Search
        </Button>
      </section>
      {currentVideoInfo && (
        <section className="downloading-section">
          <div>
            <h2>{currentVideoInfo.title}</h2>
            <br />
            <img src={`https://i.ytimg.com/vi/${currentVideoInfo.videoId}/hqdefault.jpg`} alt={currentVideoInfo.title} />
          </div>
        </section>
      )}
      {suggestions.length > 0 && (
        <section className="suggestions-section">
          <h1>Suggestions</h1>
          <Card suggestions={suggestions} isLoading={isLoading} download={download} />
        </section>
      )}
      {playlistInfo.items?.length > 0 && (
        <section className="playlist-section">
          <h1>{playlistInfo.author.name + " - " + playlistInfo.title}</h1>
          <Playlist playlist={playlistInfo.items} isLoading={isLoading} download={download} />
        </section>
      )}
    </>
  );
};

export default App;
