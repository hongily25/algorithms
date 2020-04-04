/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    // Base case: If there's only one number in the array return
    if (nums.length <= 1) {
        return;
    }

    // If there are no zeroes return
    if (nums.indexOf(0) === -1) {
        return;
    }

    // Iterate through nums array
    nums.forEach((val, i) => {

        // If the number is a zero, remove it and add to the end of the array
        if (val === 0) {
            nums.splice(nums.indexOf(0), 1);
            nums[nums.length] = 0;          
        }
    })
};