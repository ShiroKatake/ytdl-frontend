import axios from "axios";
import { host } from "./helpers";

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

const extractFileName = str => {
  const regex = /.*filename=['"]?([^"]+)/g;
  return regex.exec(str)[1];
};

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

const isUid = str => {
  const regex = /[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}/g;
  const res = str.match(regex);
  return res ? res[0] : null;
};

// Create WebSocket connection.
const socket = new WebSocket(`ws://${host.replace(/^https?:\/\//i, "")}`);

let uid = "";

// Listen for messages
socket.addEventListener("message", function (event) {
  if (isUid(event.data)) {
    uid = isUid(event.data);
  }
  if (isJson(event.data)) {
  }
  console.log("Message from server ", event.data);
});

export const downloadFileFromUrl = async videoDownloadUrl => {
  try {
    socket.send(uid);
    axios({
      url: videoDownloadUrl,
      method: "POST",
      responseType: "blob",
      data: { uid: uid },
      onDownloadProgress: progressEvent => {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(progressEvent.lengthComputable);
        console.log(percentCompleted);
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
