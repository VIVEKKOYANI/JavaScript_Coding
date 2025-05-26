const reverseNumber = (num) => {
  const isNegative = num < 0;

  const reversedString = Math.abs(num).toString().split('').reverse().join('');

  const result = isNegative ? -parseInt(reversedString) : parseInt(reversedString);

  // Check for 32-bit signed integer overflow
  if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
    return 0;
  }

  return result;
}

reverse(123);     // 321
reverse(-456);    // -654