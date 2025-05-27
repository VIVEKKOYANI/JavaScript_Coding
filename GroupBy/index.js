const arr = [{ lan: "JavaScript" }, { lan: "JavaScript" }, { lan: "css" }, { lan: "Html" }]

const outPut = arr.reduce((acc, curr) => {
    const key = curr.lan;
    if (!acc[key]) {
        acc[key] = { lan: key, count: 1 }
    } else {
        acc[key].count += 1
    }
    return acc;
}, {})

// output = [{lan: "JavaScript", count: 2},{lan: "css", count: 1}, {lan: "Html", count:1}]


function groupBy(arr, key) {
    return arr.reduce((acc, curr) => {
        const groupKey = curr[key]; // use dynamic key
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(curr);
        return acc;
    }, {});
}

// Example usage
console.log(groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
], 'age'));

module.exports = groupBy;


// {
//   25: [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//   30: [ { name: 'Bob', age: 30 } ]
// }
