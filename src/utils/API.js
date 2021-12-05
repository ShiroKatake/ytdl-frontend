import axios from "axios";
import { host, extractFileName } from "./helpers";

export const API = axios.create({
  baseURL: host,
  responseType: "json",
});

export const getSuggestions = async searchQuery => {
  try {
    const response = await API.get(`/suggestions?search=${searchQuery}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getInfos = async url => {
  try {
    const response = await API.get(`/metainfo?url=${url}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getPlaylist = async plId => {
  try {
    const response = await API.get(`/playlist?pl=${plId}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const downloadFileFromUrl = async (videoDownloadUrl, uid, setDownloadProgress) => {
  try {
    await axios({
      url: videoDownloadUrl,
      method: "POST",
      responseType: "blob",
      data: { uid: uid },
      onDownloadProgress: progressEvent => {
        let percentCompleted = 75 + Math.round((progressEvent.loaded * 100) / progressEvent.total) * 0.25;
        setDownloadProgress(percentCompleted);
      },
    }).then(response => {
      const fileName = extractFileName(response.headers["content-disposition"]);
      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);

      link.click();
      link.remove();
    });
  } catch (error) {
    console.log(error);
  }
};
