var addBinary = (a, b) => {
     let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        const bitA = i >= 0 ? parseInt(a[i]) : 0;
        const bitB = j >= 0 ? parseInt(b[j]) : 0;
        const sum = bitA + bitB + carry;
        result.push(sum % 2); // current bit
        carry = Math.floor(sum / 2); // update carry
        i--;
        j--;
    }

    return result.reverse().join('');
};

console.log(addBinary("11", "1"));       // Output: "100"
console.log(addBinary("1010", "1011"));  // Output: "10101"