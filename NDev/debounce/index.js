const debounce = (fn, delay) => {
  let timeout;
  return function(...args){
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const log = debounce(() => console.log('Called!'), 1000);
log(); // Will not log immediately