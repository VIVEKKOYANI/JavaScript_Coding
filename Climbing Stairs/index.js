var climbStairs = (n) => {
  if (n <= 2) return n;

  let a = 1; // Ways to reach step 1
  let b = 2; // Ways to reach step 2

  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};
