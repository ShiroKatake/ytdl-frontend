// Requires to have the local backend if you wanna run backend
// export const host = "http://localhost:4000";
export const host = "https://shirokatake-ytdl-backend.herokuapp.com";

export const getDownloadUrl = (videoId, format = "mp4") => `${host}/download?v=${videoId}&format=${format}`;

export const secondsToMinutes = time => {
  return Math.floor(time / 60) + ":" + Math.floor(time % 60);
};

export const isYtUrl = url => {
  const ytRegex = new RegExp(
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.?be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((?:\w|-){11})(?:&\S*)?(?:\?\S*)?$/
  );
  return ytRegex.test(url); //Change to .match() to debug
};

export const changeFormatStorage = format => {
  localStorage.setItem("format", format);
};

export const extractFileName = str => {
  const regex = /.*filename=['"]?([^"]+)/g;
  return regex.exec(str)[1];
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

export const toMB = i => (i / 1024 / 1024).toFixed(2);