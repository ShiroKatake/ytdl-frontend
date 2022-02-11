import axios from "axios";
import { hostname } from "./hostname";

const API = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${hostname}`,
  responseType: "json",
});

export const getInfos = async (url: string) => {
  try {
    const response = await API.get(`/metainfo?url=${url}`);
    const { data } = response;
    return data;
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const getSuggestions = async (searchQuery: string, setSuggestionsActive: (val: any) => void) => {
  try {
    const response = await API.get(`/suggestions?search=${searchQuery}`);
    const { data } = response;
    setSuggestionsActive(data);
    return data;
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const getPlaylist = async (playlistId: string, setPlaylistActive: (val: any) => void) => {
  try {
    const response = await API.get(`/playlist?pl=${playlistId}`);
    const { data } = response;
    setPlaylistActive(data);
    return data;
  } catch (error: any) {
    console.error(error.response.data);
  }
};

export const downloadFileFromUrl = async (videoDownloadUrl: string, uid: string, setDownloadProgress: (val: number) => void, fileName: string) => {
  try {
    await axios({
      url: videoDownloadUrl,
      method: "POST",
      responseType: "blob",
      data: { uid: uid },
      onDownloadProgress: (progressEvent) => {
        let percentCompleted = 75 + Math.round((progressEvent.loaded * 100) / progressEvent.total) * 0.25;
        setDownloadProgress(percentCompleted);
      },
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);

      link.click();
      link.remove();
    });
  } catch (error: any) {
    // Error will be thrown from the server side
    // console.error(error);
  }
};
