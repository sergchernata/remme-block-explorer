export const parseUrl = (url) => {
  return url.split("&").reduce((prev, curr) => {
    const [ key, value ] = curr.split("=");
    return {
      ...prev,
      [key]: value,
    }
  }, {});
};
