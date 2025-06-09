var maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    const area = h * w;

    maxArea = Math.max(maxArea, area);

    // Move the pointer pointing to the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

maxArea([1,8,6,2,5,4,8,3,7]); // Output: 49
