export const isNewPost = (date: Date) => {
  const oneWeek = Date.now() - 1000 * 60 * 60 * 24 * 7;

  return date.getTime() > oneWeek;
};
