const debounce = (fn, t) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    return timeout = setTimeout(() => {
      fn(...args);
    }, t)
  }

}

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms after last call