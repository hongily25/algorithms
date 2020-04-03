/*
Determine if a number is happy.

A number is happy when you start with an integer, square each digit and add the sum. Repeat the process until the sum is 1.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    // Base case. If the number is 1 obviously it is happy.
    if (n === 1) {
        return true;
    }
    
    var answer = false;
    
    // Use a hashmap to store sums.
    var hashmap = new Map();

    // Start with the given integer, n.
    let sum = n;
    
    while (sum > 1) {

        // If a sum is repeated in the hashmap, that means the integer is not a happy number.
        if (hashmap.has(sum)) {
            answer = false;
            break;
        } else {
            hashmap.set(sum, sum);
        }
        
        // Return the sum of the digits squared.
        sum = sumOfSquares(sum);

        if (sum === 1) {
            answer = true;
        } 
    }
    
    return answer;
};

function sumOfSquares(n) {
    if (typeof n === 'undefined') {
        return 0;
    }
    var string = n.toString();
    var arr = string.split('');
    var sum = 0;
    
    for (var i = 0; i < arr.length; i++) {
        sum += squared(arr[i]);
    }
    
    return sum;
}

function squared(n) {
    let num = parseInt(n);
    return num * num;
}