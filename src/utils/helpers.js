export const host = window.location.hostname === "localhost" ? "http://localhost:4000" : "https://shirokatake-ytdl-backend.herokuapp.com";

export const websocketProtocol = window.location.hostname === "localhost" ? "ws" : "wss";

export const generateDownloadUrl = (videoId, format = "mp4") => `${host}/download?v=${videoId}&format=${format}`;

export const getYtUrl = url => {
  const regex = new RegExp(
    /^(?:https?:\/\/)?(?:music\.|www\.)?(?:youtu\.?be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((?:\w|-){11})(?:&\S*)?(?:\?\S*)?$/
  );
  return url.match(regex)[1]; //Change to .match() to debug
};

export const isYtList = url => {
  const regex = new RegExp(/^https?:\/\/(?:music\.|www\.)?(?:youtu\.?be\/|youtube\.com\/)playlist\?list=([a-zA-Z0-9\-_]{34})$/);
  return regex.test(url);
};

export const isYtMixList = url => {
  const regex = new RegExp(/https?:\/\/(?:music\.|www\.)?(?:youtu\.?be\/|youtube\.com\/)(?:watch\?v=[a-zA-Z0-9]*&)?list=([a-zA-Z0-9\-_]{13})&?/);
  return regex.test(url);
};

export const isJson = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const waitForOpenConnection = socket => {
  return new Promise((resolve, reject) => {
    const maxNumberOfAttempts = 10;
    const intervalTime = 200; //ms

    let currentAttempt = 0;
    const interval = setInterval(() => {
      if (currentAttempt > maxNumberOfAttempts - 1) {
        clearInterval(interval);
        reject(new Error("Maximum number of attempts exceeded"));
      } else if (socket.readyState === socket.OPEN) {
        clearInterval(interval);
        resolve();
      }
      currentAttempt++;
    }, intervalTime);
  });
};

export const isUid = str => {
  const regex = /[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}/g;
  const res = str.match(regex);
  return res ? res[0] : null;
};

export const generateProgressText = (downloadProgress, downloaded, totalSize) => {
  let text = `Fetching . . . ${toMB(downloaded)}MB / `;
  if (downloadProgress > 75) {
    text = "Preparing download . . . ";
  }
  if (downloadProgress === 100) {
    text = "Ready! ";
  }
  return text + `${toMB(totalSize)}MB`;
};

export const toMB = i => (i / 1024 / 1024).toFixed(2);
