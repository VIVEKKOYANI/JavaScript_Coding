const firstNonRepeatingChar = (str) => {
  const count = {};

  for (const char of str) {
      count[char] = (count[char] || 0) + 1;
  }

  for (const char of str) {
      if (count[char] === 1) {
          return char;
      }
  }

  return null; // or any default value like "_", depending on your use case
};

console.log(firstNonRepeatingChar("aabbccde")); // "d"
