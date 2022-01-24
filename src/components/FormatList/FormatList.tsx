import "./FormatList.css";

export const downloadableFormats = ["mp4", "mp3"];

interface IFormatListProps {
  downloadFormat: string | null;
  setDownloadFormat: (format: string) => void;
}

export const FormatList = ({ downloadFormat, setDownloadFormat }: IFormatListProps) => {
  const setFormat = (format: string) => {
    if (downloadableFormats.includes(format)) {
      setDownloadFormat(format);
    }
  };

  // prettier-ignore
  return (
    <ul className="format-list">
      {downloadableFormats.map((format) => {
        return (
          <li key={format}>
            <input
              data-testid={`radio-${format}`}
              type="radio"
              id={format}
              name="format"
              checked={downloadFormat === format}
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            />
            <label htmlFor={format} className="radio-label">
              {format}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
