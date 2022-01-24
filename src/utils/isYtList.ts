export const isYtList = (url: string) => {
  const regex = new RegExp(/^https?:\/\/(?:music\.|www\.)?(?:youtu\.?be\/|youtube\.com\/)playlist\?list=([a-zA-Z0-9\-_]*)$/);
  return regex.test(url);
};
