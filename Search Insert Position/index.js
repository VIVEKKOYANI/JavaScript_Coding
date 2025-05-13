var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left; // position to insert target
};

searchInsert([1, 3, 5, 6], 5) // Output: 2
searchInsert([1, 3, 5, 6], 2) // Output: 1
searchInsert([1, 3, 5, 6], 7) // Output: 4
searchInsert([1, 3, 5, 6], 0) // Output: 0