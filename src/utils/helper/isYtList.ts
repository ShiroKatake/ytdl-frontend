export const isYtList = (url: string) => {
  const regex = new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:playlist|list|embed)(?:\.php)?(?:\?.*list=|\/))([a-zA-Z0-9\-_]+)/);
  return regex.test(url);
};
