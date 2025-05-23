/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;           // pointer for nums1
    let j = n - 1;           // pointer for nums2
    let k = m + n - 1;       // pointer for merged position in nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

let nums1 = [1,2,3,0,0,0], m = 3;
let nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // ➞ [1,2,2,3,5,6]
