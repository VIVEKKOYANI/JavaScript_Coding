const outerFunction = () => {
  let count = 0;
  return function () {
    return count++;
  }
}

const count = outerFunction();

console.log("", count());
console.log("", count());
