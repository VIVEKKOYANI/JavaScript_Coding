var fourSum = function (nums, target) {
  const result = [];
  const n = nums.length;

  if (n < 4) return result;

  // Sort the array to use two-pointer approach and skip duplicates
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 3; i++) {
    // Skip duplicate elements for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicate elements for the second number
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          // Skip duplicates for the third number
          while (left < right && nums[left] === nums[left - 1]) left++;
          // Skip duplicates for the fourth number
          while (left < right && nums[right] === nums[right + 1]) right--;

        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]