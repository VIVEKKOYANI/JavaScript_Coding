const getLongestSubsequence = (words, groups) => {
  const result = [];
  let prevGroup = -1;

  for (let i = 0; i < words.length; i++) {
    if(groups[i] !== prevGroup){
      result.push(words[i]);
      prevGroup = groups[i];
    }
  }

  return result;
}

const words = ["a", "b", "c", "d", "e"];
const groups = [1, 2, 2, 3, 3];

console.log(getLongestSubsequence(words, groups));
// Output might be: ["a", "b", "d"]