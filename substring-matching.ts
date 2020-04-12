/* 

Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j]

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let output = [];
    
    // Compare each word to the words in the array to see if it's a substring. If it's a substring that isn't in the output, add it.
    for (let substring of words) {
        for (let word of words) {
            if (word.includes(substring) && substring !== word && !output.includes(substring)) {
                output.push(substring);
            };
        }
    }
    
    return output;
};
