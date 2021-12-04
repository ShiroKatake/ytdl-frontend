import React from "react";
import he from "he";
import { Button } from "..";
import "./Card.css";

interface ICardProps {
  suggestions: any[];
  isLoading: boolean;
  download: (videoId: string) => void;
}

export const Card = ({ suggestions, isLoading, download }: ICardProps) => {
  return (
    <div className="grid">
      {suggestions.map((video: any) => {
        return (
          <div key={video.id} className="card">
            <a href={`https://youtube.com/watch?v=${video.id}`} rel="noopener noreferrer" target="_blank">
              <div className="image" style={{ backgroundImage: `url(${video.bestThumbnail.url})` }}></div>
              <div className="title">{video.author.name + " - " + he.decode(video.title)}</div>
            </a>
            <Button isLoading={isLoading} onClick={() => download(video.id)}>
              Download
            </Button>
          </div>
        );
      })}
    </div>
  );
};
