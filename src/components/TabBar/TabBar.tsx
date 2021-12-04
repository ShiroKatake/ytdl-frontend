import { Dispatch, SetStateAction } from "react";
import "./TabBar.css";

const downloadModes = [
  {
    id: "video",
    name: "Video",
  },
  {
    id: "playlist",
    name: "Playlist",
  },
];

interface ITabBarProps {
  downloadMode: string;
  setDownloadMode: Dispatch<SetStateAction<string>>;
}

export const TabBar = ({ downloadMode: downloadType, setDownloadMode: setDownloadType }: ITabBarProps) => {
  return (
    <ul className="tab-bar">
      {downloadModes.map(dlType => {
        return (
          <li key={dlType.id} className={`tab ${downloadType === dlType.id ? "active" : ""}`} onClick={() => setDownloadType(dlType.id)}>
            {dlType.name}
          </li>
        );
      })}
    </ul>
  );
};
