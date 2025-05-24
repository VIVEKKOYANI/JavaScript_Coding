const generate = (numRows) => {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1);
    row[0] = 1;
    row[i] = 1;
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    triangle.push(row);
  }
  return triangle;
}


console.log(generate(5));

// output

// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]

