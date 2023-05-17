function debounce(cb, delay = 1000) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
}

export { debounce };
