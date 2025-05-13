var removeElement = function(nums, val) {
    let k = 0; // Count of elements not equal to val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Overwrite at index k
            k++;
        }
    }

    return k;
};

let nums = [0,1,2,2,3,0,4,2];
let val = 2;
let k = removeElement(nums, val);

console.log(k);         // Output: 5
console.log(nums.slice(0, k)); // Output: [0,1,3,0,4] (order may vary)