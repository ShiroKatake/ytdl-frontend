import React from "react";
import he from "he";

interface ICardProps {
  title: string;
  videoId: string;
  description: string;
  thumbnailUrl: string;
  handleDownload: (videoId: string) => void;
}

const Card = ({ title, videoId, description, thumbnailUrl, handleDownload }: ICardProps) => {
  return (
    <>
      <div className="card">
        <a href={`https://youtube.com/watch?v=${videoId}`} rel="noopener noreferrer" target="_blank">
          <div className="image" style={{ backgroundImage: `url(${thumbnailUrl})` }}></div>
          <div className="title">{he.decode(title)}</div>
        </a>
        <button onClick={() => handleDownload(videoId)} className="download">
          Download
        </button>
      </div>
    </>
  );
};

export default React.memo(Card);
