import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useAppContext } from "./context/AppContext";
import { Button, CurrentVideoInfo, Suggestions, FormatList, Playlist, TextInput } from "./components";
import { getInfos, getSuggestions, downloadFileFromUrl, getPlaylist } from "./utils/API";
import { createWebSocketConnection, fetchYt, getYtUrl, isJson, isUid, isYtList, generateDownloadUrl, generateProgressText, sendMessage, } from "./utils/helpers";
import "./App.css";

export const App = () => {
  const { setButtonIsLoading } = useAppContext();

  const [ inputText, setInputText ] = useState<string>("");
  const [ downloadFormat, setDownloadFormat ] = useState<string>(localStorage.getItem("format") ? localStorage.getItem("format")! : "mp4")

  const [ currentVideoInfo, setCurrentVideoInfo ] = useState<any>(null);
  const [ suggestions, setSuggestions ] = useState<any>([]);
  const [ playlistInfo, setPlaylistInfo ] = useState<any>([]);

  const [ isHidden, setIsHidden ] = useState(true);
  const [ downloadedPercent, setDownloadedPercent ] = useState(0);
  const [ downloaded, setDownloaded ] = useState(0);
  const [ totalDownloadSize, setTotalDownloadSize ] = useState(1);

  const [ timeoutFunctionId, setTimeoutFunctionId ] = useState<NodeJS.Timeout>();

  useEffect(() => {
    localStorage.setItem("format", downloadFormat);
  }, [downloadFormat]);

  const setSuggestionsActive = (data: any) => {
    setPlaylistInfo([]);
    setSuggestions(data);
    setCurrentVideoInfo(null);
  }

  const setPlaylistActive = (data: any) => {
    setPlaylistInfo(data);
    setSuggestions([]);
    setCurrentVideoInfo(null);
  }

  const checkInputText = async () => {
    setButtonIsLoading(true);
    const ytId = getYtUrl(inputText);
    if (ytId) {
      await download(ytId);
    } else if (isYtList(inputText)) {
      setIsHidden(true);
      await fetchYt(getPlaylist, inputText, setPlaylistActive);
    } else {
      setIsHidden(true);
      await fetchYt(getSuggestions, inputText, setSuggestionsActive);
    }
    setButtonIsLoading(false);
  };

  const download = async (videoId: string) => {
    const videoUrl = videoId || inputText;
    if (!videoUrl) return;

    setDownloadedPercent(0);
    if (timeoutFunctionId) {
      clearInterval(timeoutFunctionId);
    }
    setButtonIsLoading(true);
    setIsHidden(false);

    const { data, success } = await getInfos(videoUrl);
    if (success) {
      const downloadUrl = generateDownloadUrl(videoUrl, downloadFormat);
      const socket = createWebSocketConnection();
      let uid = "";

      // Listen for messages
      socket.addEventListener("message", (event) => {
        uid = isUid(event.data);
        if (isJson(event.data)) {
          const downloadProgress = JSON.parse(event.data);
          setDownloadedPercent((downloadProgress.downloaded / downloadProgress.total) * 75);
          setDownloaded(downloadProgress.downloaded);
          setTotalDownloadSize(downloadProgress.total);
        }
      });
      await sendMessage(socket, uid);

      setCurrentVideoInfo(data.videoDetails);

      console.log("Starting download . . .");
      const filename = `${data.videoDetails.title}.${downloadFormat}`;
      await downloadFileFromUrl(downloadUrl, uid, setDownloadedPercent, filename);

      setButtonIsLoading(false);
      setTimeoutFunctionId(
        setTimeout(() => {
          setIsHidden(true);
          setDownloadedPercent(0);
        }, 3000)
      );
    }
  };

  return (
    <>
      <section className="search-section">
        <TextInput inputText={inputText} setInputText={setInputText}/>
        <ProgressBar
          hidden={isHidden}
          striped
          variant="success"
          now={downloadedPercent}
          label={generateProgressText(downloadedPercent, downloaded, totalDownloadSize)}
          style={{ width: "100%", height: "30px", lineHeight: "30px" }}
        />
        <FormatList downloadFormat={downloadFormat} setDownloadFormat={setDownloadFormat}/>
        <Button main onClick={checkInputText}>
          Search
        </Button>
      </section>
      {currentVideoInfo && (
        <CurrentVideoInfo currentVideoInfo={currentVideoInfo} />
      )}
      {suggestions.length > 0 && (
        <Suggestions suggestions={suggestions} download={download} />
      )}
      {playlistInfo.items?.length > 0 && (
        <Playlist playlistInfo={playlistInfo} download={download} />
      )}
    </>
  );
};
