const longestPalindrome = (s) => {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substr = s.slice(i, j);
      if (isPalindrome(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }

  return longest;

  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
};


console.log(longestPalindrome("abcbd")); // "bcb"
console.log(longestPalindrome("racecar")); // "racecar"