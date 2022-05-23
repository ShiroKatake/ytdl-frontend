import { downloadableFormats } from "../../components";
import { getHostname } from "./getHostname";

export const generateDownloadUrl = (videoId: string, format = "mp4") => {
  if (!downloadableFormats.includes(format)) {
    throw new Error("Invalid format.");
  }
  return `${getHostname()}/download?v=${videoId}&format=${format}`;
};
