const a = [1, 2, 3, [4,[5, 6]], 7, 8]

const flattenArray = (array, secondArray) => {
  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === "number") {
      secondArray.push(array[index]);
    } else {
      flattenArray(array[index], secondArray);
    }
  }

  return secondArray;
}

console.log("flattenArray", flattenArray(a, []));