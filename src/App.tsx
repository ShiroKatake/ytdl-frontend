import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import { getInfos, getSuggestions, downloadFileFromUrl } from "./utils/API";
import { getDownloadUrl, isYtUrl } from "./utils/helpers";
// import { ProgressBar } from "react-bootstrap";

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
    const videoUrl = videoId || inputText;
    if (!videoUrl) return;
    const { data, success } = await getInfos(videoUrl);
    if (success) {
      const downloadUrl = getDownloadUrl(videoUrl, downloadFormat);

      setCurrentVideoInfo(data.videoDetails);
      downloadFileFromUrl(downloadUrl);
      console.log("Starting download . . .");
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
          {/* <ProgressBar striped variant="success" now={40} label="Initializing . . ." style={{ width: "85%", height: "20px" }} /> */}
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
          <Button onClick={checkInput} />
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
