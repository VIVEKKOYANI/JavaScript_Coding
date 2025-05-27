const differenceOfSums = (n, m) => {
  let divisibleSum = 0;
  let nonDivisibleSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      divisibleSum += i;
    } else {
      nonDivisibleSum += i;
    }
  }

  return Math.abs(divisibleSum - nonDivisibleSum);
}

console.log(differenceOfSums(10, 3));
