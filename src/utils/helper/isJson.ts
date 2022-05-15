export const tryParseJSON = (string: string) => {
  let res;
  try {
    res = JSON.parse(string);
  } catch (e) {
    return false;
  }
  return res;
};
