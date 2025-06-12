var intersect = (nums1, nums2) => {
  let map = {};
  let result = [];

  // Count frequency of each number in nums1
  for (let num of nums1) {
    map[num] = (map[num] || 0) + 1;
  }

  // For each number in nums2, check if it exists in map and still has count > 0
  for (let num of nums2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--; // Decrease count after using
    }
  }

  return result;
};

intersect([1, 2, 2, 1], [2, 2]) // Output: [2,2]
intersect([4, 9, 5], [9, 4, 9, 8, 4]) // Output: [4,9]
