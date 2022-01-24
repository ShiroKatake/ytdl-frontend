import { hostname } from "../handler/hostname";

export const generateDownloadUrl = (videoId: string, format = "mp4") => {
  return `${hostname}/download?v=${videoId}&format=${format}`;
};
