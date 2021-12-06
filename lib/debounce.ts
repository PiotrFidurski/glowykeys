export function debounce(callback, timeout) {
  let timeOutId = null;
  return (...args) => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
}
