export const isYtMixList = (url: string) => {
  const regex = new RegExp(/https?:\/\/(?:music\.|www\.)?(?:youtu\.?be\/|youtube\.com\/)(?:watch\?v=[a-zA-Z0-9]*&)?list=([a-zA-Z0-9\-_]{13})&?/);
  return regex.test(url);
};
