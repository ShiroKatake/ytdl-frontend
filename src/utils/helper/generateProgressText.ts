export const generateProgressText = (downloadProgress: number, downloaded: number, totalSize: number) => {
  let text = `Fetching . . . ${toMB(downloaded)}MB / `;
  if (downloadProgress > 75) {
    text = "Preparing download . . . ";
  }
  if (downloadProgress === 100) {
    text = "Ready! ";
  }
  return text + `${toMB(totalSize)}MB`;
};

const toMB = (val: number) => (val / 1024 / 1024).toFixed(2);
