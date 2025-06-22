var divide = function (dividend, divisor) {
  const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Edge case: overflow
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    // Convert both numbers to negatives for overflow safety
    let negatives = 2;
    if (dividend > 0) {
        negatives--;
        dividend = -dividend;
    }
    if (divisor > 0) {
        negatives--;
        divisor = -divisor;
    }

    let result = 0;

    while (dividend <= divisor) {
        let powerOfTwo = -1;
        let value = divisor;

        // Double the value until it's too small
        while (value >= (INT_MIN >> 1) && dividend <= (value + value)) {
            value += value;         // value <<= 1
            powerOfTwo += powerOfTwo; // powerOfTwo <<= 1
        }

        dividend -= value;
        result += powerOfTwo;
    }

    // If the original result was supposed to be positive
    return negatives === 1 ? result : -result;
};