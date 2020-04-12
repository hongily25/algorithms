/*

We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // Sort the stones by weight in acending order
    stones = stones.sort(sortByInt);
    
    while (stones.length > 1) {
        // Take the largest stone x and second largest stone y and compare the difference
        let x = stones.pop();
        let y = stones.pop();

        let weight = x - y;

        // If the difference is greater than 0 add it to the array
        if (weight > 0) {
            stones.push(weight);
            stones = stones.sort(sortByInt);
        }
    }
    
    if (stones.length === 1) {
        return stones[0];
    } else {
        return 0;
    }
};

var sortByInt = function(a,b) {
    return a - b;
}

