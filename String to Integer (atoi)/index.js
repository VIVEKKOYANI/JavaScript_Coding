var myAtoi = function(s) {
    let i = 0, sign = 1, result = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Step 1: Ignore leading whitespaces
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // Step 2: Handle sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Convert digits to number
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';

        // Step 4: Check overflow/underflow
        if (result > Math.floor(INT_MAX / 10) || 
           (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};

console.log(myAtoi("42"));            // 42
console.log(myAtoi("   -42"));        // -42
console.log(myAtoi("4193 with words"));// 4193
console.log(myAtoi("words and 987"));  // 0
console.log(myAtoi("-91283472332"));   // -2147483648 (clamped)
