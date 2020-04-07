//Given an integer array arr, count element x such that x + 1 is also in arr. If there're duplicates in arr, count them seperately.

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let count:number = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the array has the element + 1 increase the counter
        let x = arr[i] + 1;
        if (arr.includes(x)) count++;
    }
    
    return count;
};