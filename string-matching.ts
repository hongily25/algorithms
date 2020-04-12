/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    var sorted = [...words];
    let output = new Set();
    let answer = [];
    
    sorted.sort((a, b) => a.length - b.length);
    
    let sorted2 = sorted;
    
    for (let i of sorted) {
        for (let j of sorted2) {
            if (j.includes(i) && i !== j && !output.incl) {
                output.add(i);
            };
        }
    }
    
    return Array.from(output);
};
