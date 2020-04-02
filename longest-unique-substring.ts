/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let input = s.split('');

    // Base case: if the string is 0 or 1, that is the longest substring
    if (input.length === 0 || input.length === 1) {
        return input.length;
    }     
    
    // Use a hashmap to store the character at the key and the index as the value.
    let hashMap = new Map<string, number>();
    
    let output = 0;
    let next = 0;
    
    for (let i = 0; next < input.length; next++) {
        // If input[next] already exists in the hashmap, move onto the next substring
        if (hashMap.has(input[next])) {
            i = Math.max(hashMap.get(input[next]) + 1, i);
        }
        output = Math.max(output, next - i + 1);
        hashMap.set(input[next], next);
    }
    
    return output;
};