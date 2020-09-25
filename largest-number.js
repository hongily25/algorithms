/* Given a list of non negative integers, arrange them such that they form the largest number. */

/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function(nums) {
    var sorted = nums.sort(compareNumbers);

    console.log('sorted', sorted);

};

function compareNumbers(a, b) {

    var ab = a.toString() + b.toString();
    var ba = b.toString() + a.toString();

    return ab > ba ? 1 : 0;
}

