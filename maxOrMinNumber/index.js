const arrNumber = [1, 9, 871, 65, 65, 76];

const maxFunction = (arr) => {
    return arr.reduce((pre, curr) => {return (pre > curr ? pre : curr)}, 0);
}

const minFunction = (arr) => {
    return arr.reduce((pre, curr) => {return (pre < curr ? pre : curr)});
}

const result = maxFunction(arrNumber);
const result1 = minFunction(arrNumber);
console.log("result", result, result1);
