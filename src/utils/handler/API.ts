import axios from "axios";
import { hostname } from "./hostname";

const API = axios.create({
  baseURL: hostname,
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

export const getSuggestions = async (
  searchQuery: string,
  setSuggestionsActive: (val: any) => void
) => {
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
