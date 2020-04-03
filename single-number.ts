/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    // Base case. If there's only one return that
    if (nums.length === 1) {
        return nums[0];
    }
    
    var hashmap = new Map();
    
    var possibles = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (!hashmap.has(nums[i])) {
            hashmap.set(nums[i], i);
            possibles.push(nums[i]);
        } else {
            possibles = possibles.filter(num => num !== nums[i]);
        }
    }
    
    return possibles[0];
    
};