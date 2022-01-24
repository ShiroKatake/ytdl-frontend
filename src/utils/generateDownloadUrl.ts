import { host } from "./hostname";

export const generateDownloadUrl = (videoId: string, format = "mp4") => {
  return `${host}/download?v=${videoId}&format=${format}`;
};
