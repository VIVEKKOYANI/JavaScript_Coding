function curry(fn) {
  return function curried(...args){
    if(args.length >= fn.length){
      return fn.apply(this, args);
    }else{
      return function(...args2){
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

// Example usage:
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // ➜ 6
console.log(curriedSum(1, 2)(3)); // ➜ 6
console.log(curriedSum(1)(2, 3)); // ➜ 6