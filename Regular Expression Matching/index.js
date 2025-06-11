var isMatch = (s, p) => {
  const m = s.length;
  const n = p.length;

  // Create DP table
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));
  dp[0][0] = true;

  // Fill first row for patterns like a*, a*b*, a*b*c* etc.
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2]; // Treat '*' as 0 occurrences
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j]; // Treat '*' as 1+ occurrences
        }
      }
    }
  }

  return dp[m][n];
};

console.log(isMatch("aab", "c*a*b")); // true
console.log(isMatch("mississippi", "mis*is*p*.")); // false
console.log(isMatch("ab", ".*")); // true
