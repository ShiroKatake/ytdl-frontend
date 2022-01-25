import { downloadableFormats } from "../../components";
import { hostname } from "../handler/hostname";

export const generateDownloadUrl = (videoId: string, format = "mp4") => {
  if (downloadableFormats.includes(format)) {
    throw new Error("Invalid url.");
  }
  return `${hostname}/download?v=${videoId}&format=${format}`;
};
