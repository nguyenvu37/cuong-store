export const formatTime = (time) => {
  if (time) {
    const year = time.getFullYear();
    const month =
      time.getMonth() < 10 ? `0${time.getMonth() + 1}` : time.getMonth() + 1;
    const date = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();
    return `${date}/${month}/${year}`;
  }
  return "";
};
