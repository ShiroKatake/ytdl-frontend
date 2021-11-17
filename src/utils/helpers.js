// Requires to have the local backend if you wanna run backend
// export const host = "http://localhost:4000";
export const host = "https://shirokatake-ytdl-backend.herokuapp.com";

export const getDownloadUrl = (videoId, format = "mp4") => `${host}/download?v=${videoId}&format=${format}`;

export const secondsToMinutes = time => {
  return Math.floor(time / 60) + ":" + Math.floor(time % 60);
};

export const isYtUrl = url => {
  const ytRegex = new RegExp(
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/
  );
  return ytRegex.test(url);
};

export const changeFormatStorage = format => {
  localStorage.setItem("format", format);
};
