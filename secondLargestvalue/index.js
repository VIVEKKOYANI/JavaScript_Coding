const arrNumber = [1, 3, 5, 8, 4];

const secondLar = (arr) => {
    firstLar = Math.max(...arr);
    index = arr.indexOf(firstLar);
    arr = arr.splice(index, 1);
    secondLarj = Math.max(...arr);
    return secondLarj;
}

const result = secondLar(arrNumber);
console.log("result",result);

// other method

const secondLargest = (arr) => {
  let sortedArr = [...new Set(arr)].sort((a, b) => b - a);
  return sortedArr[1] ?? null; // Return second largest or null if not found
};

console.log("result", secondLargest(arrNumber));
