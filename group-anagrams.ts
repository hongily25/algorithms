// Given an array of strings, group anagrams together.

// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let output = [];
    
    // Base case: if it's empty return empty array;
    if (strs.length < 1) {
        return output;
    }
    
    let words = [];

    // words is an array of objects with the key as the sorted anagram and the value is an array of the original words.
    /*
    [
        {
            "abt": ["bat"]
        }
    ]
    */
    
    while (strs.length > 0) {
        let currentWord = {
            sorted: strs[0].split('').sort().join(''),
            original: strs[0]
        };
    
        // If the anagram is novel, add a new entry to the words array
        if (!words.hasOwnProperty(currentWord.sorted)) {
            words[currentWord.sorted] = [currentWord.original];
        } else {
            // Add the word to the existing anagram key
            let otherWords = words[currentWord.sorted];
            words[currentWord.sorted] = [...otherWords, currentWord.original];
        }
        
        // Remove the word once we're done with it
        strs.shift();
    }
    
    // Iterate through array to output the groups of anagrams.
    for (const prop in words) {
        output.push(words[prop]);
    }
    
    return output;
    
};