/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    n -= 1;
    for(let i = 1; i < 11; i++){
        let j = Math.pow(10, i -1);
        console.log(i, j, n, 9*j*i)
        if(n < 9 * j * i){
            return String((j + n / i))[n % i]
        }
        n -= 9 * j * i;
    }
    return 0;
};

console.log(findNthDigit(1000));