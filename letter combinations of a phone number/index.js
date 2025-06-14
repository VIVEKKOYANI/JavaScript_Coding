/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const result = [];
  const phoneMap = {
    '2': 'abc', '3': 'def',
    '4': 'ghi', '5': 'jkl', '6': 'mno',
    '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };

  const backtrack = (index, path) => {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    const letters = phoneMap[digits[index]];
    for (let char of letters) {
      backtrack(index + 1, path + char);
    }
  };

  backtrack(0, '');
  return result;
};

letterCombinations("23");
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
