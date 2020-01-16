/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0,i = 0;
    let temp = [];
    while(i < s.length) {
        if(temp.indexOf(s[i]) === -1) {
            temp.push(s[i]);
        } else {
            temp.shift();
            continue;
        }
        res = Math.max(res, temp.length);
        i++;
    }
    return res;
};