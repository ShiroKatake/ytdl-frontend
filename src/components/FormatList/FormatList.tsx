import "./FormatList.css";

const formats = [
  { id: "mp4" },
  { id: "mp3" },
];

interface IFormatListProps {
  downloadFormat: string | null;
  setDownloadFormat: (format: string) => void;
}

export const FormatList = ({ downloadFormat, setDownloadFormat }: IFormatListProps) => {
  return (
    <ul className="format-list">
      {formats.map((format) => {
        return (
          <li key={format.id}>
            <input
              data-testid={`radio-${format.id}`}
              type="radio"
              id={format.id}
              name="format"
              checked={downloadFormat === format.id}
              value={format.id}
              onChange={(e) => setDownloadFormat(e.target.value)}
            />
            <label htmlFor={format.id} className="radio-label">
              {format.id}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
