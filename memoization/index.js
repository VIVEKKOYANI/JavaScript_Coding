function memoize(fn){
  const cache = new Map();

  return function(...args){
    const key = JSON.stringify(args);

    if(cache.has(key)){
      console.log("Fetching from cache:", key);
      
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  }
}


const add = (a, b) => a + b;
const result = memoize(add);

console.log('result', result(1,0));
