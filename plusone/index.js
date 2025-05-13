/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    // If all digits were 9, we need to add an extra digit at the start
    digits.unshift(1);
    return digits;
};

plusOne([1, 2, 3]); // ➞ [1, 2, 4]
plusOne([4, 3, 2, 1]); // ➞ [4, 3, 2, 2]
plusOne([9]); // ➞ [1, 0]
plusOne([9,9,9]); // ➞ [1, 0, 0, 0]
