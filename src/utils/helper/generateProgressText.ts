export const generateProgressText = (downloadedPercent: number) => {
  let text = "Fetching . . .";
  if (downloadedPercent > 75) {
    text = "Preparing download . . .";
  }
  if (downloadedPercent === 100) {
    text = "Ready!";
  }
  return `${text} ${downloadedPercent}%`;
};
