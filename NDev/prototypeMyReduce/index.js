Array.prototype.myReduce = function (callback, initialValue) {
  console.log('myReduce called', this, callback, initialValue);
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const array = this;
  let accumulator = initialValue;
  let startIndex = 0;
  if (accumulator === undefined) {
    if (array.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = array[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 10