const numbers = [1, 2, 3, 8, 9, 12, 16];

const even = numbers.filter((item) => item % 2 === 0);
const odd = numbers.filter((item) => item % 2 !== 0);

// console.log("", even, odd);

// other methods

const { evenNum, oddNum } = numbers.reduce((acc, curr) => {
    curr % 2 === 0 ? acc.evenNum.push(curr) : acc.oddNum.push(curr)
    return acc
}, { evenNum: [], oddNum: [] })

// console.log("", even, odd);
