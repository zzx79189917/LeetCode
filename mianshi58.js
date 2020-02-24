/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let left = s.substr(0, n);
    let right = s.substr(n);
    return `${right}${left}`;
};