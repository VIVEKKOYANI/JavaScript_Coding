
var threeSumClosest = (nums, target) => {
  // Sort the array to use two pointers
  nums.sort((a, b) => a - b);

  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      // Check if current sum is closer to the target
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      // Move pointers based on comparison
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
};

threeSumClosest([-1, 2, 1, -4], 1); // Output: 2
// Closest sum to 1 is 2 (-1 + 2 + 1)
