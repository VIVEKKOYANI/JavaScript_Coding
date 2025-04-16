const lengthOfLongestSubstring = (string) => {
  let set = new Set();
  let left = 0;
  let max = 0;
  
  for(let right = 0; right < string.length; right++){
      while(set.has(string[right])){
          set.delete(string[left]);
          left++;
      }
      set.add(string[right]);
      max = Math.max(max, right - left + 1)
  }
  
  return max
}
  
  
console.log(lengthOfLongestSubstring("abcabcbb"))