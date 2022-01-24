export const getYtUrl = (url: string) => {
  const regex = new RegExp(/^(?:https?:\/\/)?(?:music\.|www\.)?(?:youtu\.?be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((?:\w|-){11})(?:&\S*)?(?:\?\S*)?$/);
  return url.match(regex)?.[1];
};
