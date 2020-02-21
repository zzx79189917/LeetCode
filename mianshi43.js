/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let countr = 0;
    for (let i = 1; i <= n; i *= 10) {
        let divider = i * 10;
        countr += Math.floor(n / divider) * i + Math.min(Math.max(n % divider - i + 1, 0), i);
    }
    return countr;
};