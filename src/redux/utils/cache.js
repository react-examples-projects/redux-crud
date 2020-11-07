window.cacheContainer = {};
const cache = (value) => {
  if (value in cacheContainer) {
    return cacheContainer[value];
  }
  return (cacheContainer[value] = document.getElementById(value));
};
export default cache;
