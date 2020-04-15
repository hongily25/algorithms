/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
//s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]] 
// s = "abc", shift = [[1,2]]
var stringShift = function(s, shift) {
    if (s.length === 1) {
        return s;
    }
    let answer = s;
    let substring = '';
    
    while (shift.length > 0) {
        let dir = shift.shift();
        // Shift left
        if (dir[0] === 1) {
            if (dir[1] > s.length) {
                dir[1] = dir[1] - s.length;
            }
            substring = answer.substr(answer.length - dir[1], answer.length);
            answer = substring + answer;
            answer = answer.substr(0, answer.length - substring.length);
        } else {
            // Shift right
            if (dir[1] > s.length) {
                dir[1] = dir[1] - s.length;
            }
            substring = answer.substr(0,dir[1]);
            answer += substring;
            answer = answer.substr(dir[1]);
        }
    }
    
    return answer;
};