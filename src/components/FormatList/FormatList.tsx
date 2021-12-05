import { Dispatch, SetStateAction } from "react";
import "./FormatList.css";

const formats = [
  {
    id: "mp4",
    name: "mp4",
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

interface IFormatListProps {
  downloadFormat: string | null;
  setDownloadFormat: (format: string) => void;
}

export const FormatList = ({ downloadFormat, setDownloadFormat }: IFormatListProps) => {
  return (
    <ul className="format-list">
      {formats.map(format => {
        return (
          <li key={format.id}>
            <input
              type="radio"
              id={format.id}
              name="format"
              checked={downloadFormat === format.id}
              value={format.id}
              onChange={e => setDownloadFormat(e.target.value)}
            />
            <label htmlFor={format.id} className="radio-label">
              {format.name}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
