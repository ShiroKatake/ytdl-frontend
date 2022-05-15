export const generateProgressText = (downloadedPercent: number) => {
  let text = `Fetching . . . ${downloadedPercent}%`;
  if (downloadedPercent === 100) {
    text = "Done! Preparing download . . .";
  }
  return text;
};
