function throttle(cb, delay = 1000) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
}

export { throttle };
