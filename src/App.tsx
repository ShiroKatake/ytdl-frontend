import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import { getInfos, getSuggestions, downloadFileFromUrl } from "./utils/API";
import { host, isYtUrl, getDownloadUrl, isJson, isUid, waitForOpenConnection, toMB } from "./utils/helpers";
import { ProgressBar } from "react-bootstrap";

const formats = [
  {
    id: "mp4",
    name: "mp4",
    isChecked: true,
  },
  {
    id: "mp3",
    name: "mp3",
  },
  {
    id: "mov",
    name: "mov",
  },
  {
    id: "flv",
    name: "flv",
  },
];

const App = () => {
  const [inputText, setInputText] = useState("");
  const [downloadFormat, setDownloadFormat] = useState("mp4");
  const [suggestions, setSuggestions] = useState<any>([]);
  const [currentVideoInfo, setCurrentVideoInfo] = useState<any>(null);
  const [focus, setFocus] = useState(false);

  const [downloadProgress, setDownloadProgress] = useState(0);
  const [hidden, setHidden] = useState(true);

  const [downloaded, setDownloaded] = useState(0);
  const [totalSize, setTotalSize] = useState(1);

  const checkInput = () => {
    if (isYtUrl(inputText)) {
      download(inputText);
    } else {
      fetchSuggestions();
    }
  };

  const fetchSuggestions = async () => {
    try {
      const { data, success } = await getSuggestions(inputText);
      if (success) {
        setSuggestions(data);
        setCurrentVideoInfo(undefined);
      }
    } catch (err) {}
  };

  const download = async (videoId: string) => {
    setHidden(false);
    const videoUrl = videoId || inputText;
    if (!videoUrl) return;
    const { data, success } = await getInfos(videoUrl);
    if (success) {
      const downloadUrl = getDownloadUrl(videoUrl, downloadFormat);

      // Create WebSocket connection.
      const socket = new WebSocket(`${host.replace(/^https?/i, "wss")}`);

      let uid = "";

      // Listen for messages
      socket.addEventListener("message", event => {
        if (isUid(event.data)) {
          uid = isUid(event.data);
        }
        if (isJson(event.data)) {
          const downloadProgress = JSON.parse(event.data);
          setDownloadProgress((downloadProgress.downloaded / downloadProgress.total) * 100);
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
      console.log("Starting download . . .");
      await downloadFileFromUrl(downloadUrl, uid);
      setTimeout(() => {
        setHidden(true);
        setDownloadProgress(0);
      }, 4000);
    }
  };

  return (
    <>
      <main className="container">
        <section className="search-section">
          <div className={`input-container ${focus ? "animate" : ""}`}>
            <input
              type="text"
              name="input"
              id="text"
              placeholder="Search or paste url"
              spellCheck={false}
              autoComplete="off"
              onBlur={() => setFocus(false)}
              onFocus={() => setFocus(true)}
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              autoFocus
            />
          </div>
          <br />
          <ProgressBar
            hidden={hidden}
            striped
            variant="success"
            now={downloadProgress}
            label={`${downloadProgress !== 100 ? "Fetching . . ." : "Ready! "} ${toMB(downloaded)}MB /${toMB(totalSize)}MB`}
            style={{ width: "85%", height: "30px", lineHeight: "30px" }}
          />
          <ul className="format-list">
            {formats.map(format => {
              return (
                <li key={format.id}>
                  <input
                    type="radio"
                    id={format.id}
                    name="format"
                    checked={downloadFormat === format.id}
                    value={format.name}
                    onChange={e => setDownloadFormat(e.target.value)}
                  />
                  <label htmlFor={format.id} className="radio-label">
                    {format.name}
                  </label>
                </li>
              );
            })}
          </ul>
          <Button disabled={!hidden} onClick={checkInput} />
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
        <section className="suggestions-section">
          {!!suggestions.length && <h1>Suggestions</h1>}
          <div className="grid">
            {suggestions.map((video: any) => {
              const { snippet: s } = video;
              return (
                <Card
                  key={video.id.videoId}
                  title={s.title}
                  videoId={video.id.videoId}
                  description={s.description}
                  thumbnailUrl={s.thumbnails.medium.url}
                  handleDownload={() => download(video.id.videoId)}
                />
              );
            })}
          </div>
        </section>
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default App;
