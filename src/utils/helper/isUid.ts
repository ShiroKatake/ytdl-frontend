export const isUid = (string: string) => {
  const regex = /[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}/g;
  const match = string.match(regex);
  return match ? match[0] : "";
};
