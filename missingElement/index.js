const arrNum = [1, 2, 3, 4, 5, 6, 9, 10];

const missingValues = (arr) => {
    const missing = [];

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    for (let i = min; i < max; i++) {
        if (arr.indexOf(i) < 0) {
            missing.push(i);
        }
    }

    return missing
}

const result = missingValues(arrNum);
console.log("result", result);