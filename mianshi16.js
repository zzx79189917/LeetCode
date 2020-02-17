/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let isNegative = n<0;
    let result = newPow(x, Math.abs(n));
    return isNegative? 1/result: result;
};

function newPow(base, exponent){
    if(exponent === 0){
        return 1;
    }
    if(exponent === 1){
        return base;
    }
    let subResult = newPow(base, Math.floor(exponent / 2));
    return exponent%2? subResult*subResult*base: subResult*subResult;
}

console.log(myPow(2,10))