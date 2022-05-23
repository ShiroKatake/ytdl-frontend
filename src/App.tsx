import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useAppContext } from "./context/AppContext";
import { Button, CurrentVideoInfo, Suggestions, FormatList, Playlist, TextInput } from "./components";
import { getInfos, getSuggestions, getPlaylist } from "./utils/handler/API";
import { createWebSocketConnection, getYtID, tryParseJSON, isYtList, generateProgressText, downloadFromLink } from "./utils";
import "./App.css";

export const App = () => {
  const { setButtonIsLoading } = useAppContext();

  const [inputText, setInputText] = useState<string>("");
  const [downloadFormat, setDownloadFormat] = useState<string>(
    localStorage.getItem("format") || "mp4"
  );

  const [currentVideoInfo, setCurrentVideoInfo] = useState<any>(null);
  const [suggestions, setSuggestions] = useState<any>([]);
  const [playlistInfo, setPlaylistInfo] = useState<any>([]);

  const [progressHidden, hideProgress] = useState(true);
  const [downloadedPercent, setDownloadedPercent] = useState(0);

  const [timeoutFunctionId, setTimeoutFunctionId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    localStorage.setItem("format", downloadFormat);
  }, [downloadFormat]);

  const setSuggestionsActive = (data: any) => {
    setPlaylistInfo([]);
    setSuggestions(data);
    setCurrentVideoInfo(null);
  };

  const setPlaylistActive = (data: any) => {
    setPlaylistInfo(data);
    setSuggestions([]);
    setCurrentVideoInfo(null);
  };

  const checkInputText = async () => {
    setButtonIsLoading(true);
    const ytId = getYtID(inputText);
    if (ytId) {
      await download(ytId);
    } else if (isYtList(inputText)) {
      hideProgress(true);
      await getPlaylist(inputText, setPlaylistActive);
      setButtonIsLoading(false);
    } else {
      hideProgress(true);
      await getSuggestions(inputText, setSuggestionsActive);
      setButtonIsLoading(false);
    }
  };

  /* istanbul ignore next */
  const download = async (videoId: string) => {
    try {
      const videoUrl = videoId || inputText;
      if (!videoUrl) {
        throw new Error("Invalid video.");
      }

      setDownloadedPercent(0);
      if (timeoutFunctionId) {
        clearInterval(timeoutFunctionId);
      }
      setButtonIsLoading(true);
      hideProgress(false);

      const data = await getInfos(videoUrl);
      setCurrentVideoInfo(data.videoDetails);

      console.log("Starting download . . .");

      const socket = createWebSocketConnection();

      socket.addEventListener("open", () => {
        const downloadData = {
          v: videoUrl,
          format: downloadFormat,
        }
        socket.send(JSON.stringify(downloadData));
      });

      socket.addEventListener("message", (event) => {
        const downloadProgress = tryParseJSON(event.data);
        if (downloadProgress) {
          setDownloadedPercent(
            Math.round((downloadProgress.downloaded / downloadProgress.total) * 100)
          );
        } else {
          const url = window.URL.createObjectURL(new Blob([event.data]));
          const filename = `${data.videoDetails.title}.${downloadFormat}`;
          socket.close();

          downloadFromLink(url, filename);

          setButtonIsLoading(false);
          setTimeoutFunctionId(
            setTimeout(() => {
              hideProgress(true);
              setDownloadedPercent(0);
            }, 3000)
          );
        }
      });
    } catch (error: any) {
      console.error(error.message);
      setButtonIsLoading(false);
      setTimeoutFunctionId(
        setTimeout(() => {
          hideProgress(true);
          setDownloadedPercent(0);
        }, 5000)
      );
    }
  };
  // prettier-ignore
  return (
    <>
      <section className="search-section">
        <TextInput inputText={inputText} setInputText={setInputText} onEnter={checkInputText} />
        <ProgressBar
          animated={downloadedPercent === 100 ? true : false}
          hidden={progressHidden}
          striped
          variant="success"
          now={downloadedPercent}
          label={generateProgressText(downloadedPercent)}
          style={{ width: "100%", height: "30px", lineHeight: "30px" }}
        />
        <FormatList downloadFormat={downloadFormat} setDownloadFormat={setDownloadFormat} />
        <Button data-testid="searchButton" main onClick={checkInputText}>Search</Button>
      </section>
      <section className="downloading-section">
        {currentVideoInfo && <CurrentVideoInfo currentVideoInfo={currentVideoInfo} />}
      </section>
      <section className="suggestions-section">
        {suggestions.length > 0 && <Suggestions suggestions={suggestions} download={download} />}
      </section>
      <section className="playlist-section">
        {playlistInfo.items?.length > 0 && <Playlist playlistInfo={playlistInfo} download={download} />}
      </section>
    </>
  );
};
