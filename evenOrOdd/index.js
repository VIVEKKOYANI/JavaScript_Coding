const numbers = [1,2,3,8,9,12,16];

const even = numbers.filter((item) => item % 2 === 0);
const odd = numbers.filter((item) => item % 2 !== 0);

console.log("", even, odd);
