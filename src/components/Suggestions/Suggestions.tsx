import he from "he";
import { Button } from "..";
import "./Suggestions.css";

interface ISuggestionsProps {
  suggestions: any;
  download: (videoId: string) => void;
}

export const Suggestions = ({ suggestions, download }: ISuggestionsProps) => {
  return (
    <>
      <h1>Suggestions</h1>
      <div data-testid="suggestion" className="grid">
        {suggestions.map((video: any, index: number) => {
          return (
            <div data-testid={`video-${index}`} key={video.id} className="card">
              <a data-testid={`url-${index}`} href={`https://youtube.com/watch?v=${video.id}`} rel="noopener noreferrer" target="_blank">
                <div className="image" style={{ backgroundImage: `url(${video.bestThumbnail.url})` }}></div>
                <div data-testid={`title-${index}`} className="title">{video.author.name + " - " + he.decode(video.title)}</div>
              </a>
              <Button data-testid={`downloadButton-video${index}`} onClick={() => download(video.id)}>
                Download
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};
