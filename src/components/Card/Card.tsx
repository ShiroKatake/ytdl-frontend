import React from "react";
import he from "he";
import { Button } from "..";
import "./Card.css";

interface ICardProps {
  isLoading: boolean;
  author: string;
  title: string;
  videoId: string;
  description?: string;
  thumbnailUrl: string;
  handleDownload: (videoId: string) => void;
}

const Card = ({ isLoading, author, title, videoId, description, thumbnailUrl, handleDownload }: ICardProps) => {
  return (
    <div className="card">
      <a href={`https://youtube.com/watch?v=${videoId}`} rel="noopener noreferrer" target="_blank">
        <div className="image" style={{ backgroundImage: `url(${thumbnailUrl})` }}></div>
        <div className="title">{author + " - " + he.decode(title)}</div>
      </a>
      <Button isLoading={isLoading} onClick={() => handleDownload(videoId)}>
        Download
      </Button>
    </div>
  );
};

export default React.memo(Card);
