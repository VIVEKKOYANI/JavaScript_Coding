var generateParenthesis = function (n) {
  const result = [];

  const backtrack = (current, open, close) => {
    // If the string is complete
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // If we can still add an opening parenthesis
    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }

    // If we can add a closing parenthesis
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  };

  backtrack('', 0, 0);
  return result;
};


generateParenthesis(3);

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]