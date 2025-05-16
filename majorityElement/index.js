const majorityElement = (nums) => {
  let count = 0;
  let candidate = null;

  for(let num of nums){
    if(count === 0){
      candidate = num
    }

    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
}

// Example usage:
const nums = [2, 2, 1, 1, 1, 2, 2];
const result = majorityElement(nums);
console.log("Majority element is:", result);