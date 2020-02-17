/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let max = Math.pow(10, n);
    let arr = [];
    for(let i=1 ;i<max; i++){
        arr.push(i);
    }
    return arr;
};

console.log(printNumbers(2))