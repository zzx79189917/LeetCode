/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) return 1 / myPow(x, -n);
    if (n === 0) return 1;
    if (n % 2 === 0) return myPow(x * x, (n / 2)|0);
    //由于去掉了小数点后面的 就在后面补一个乘上
    return myPow(x * x, (n / 2)|0) * x;
};
let res = myPow(1.26441, 9);
console.log(res)