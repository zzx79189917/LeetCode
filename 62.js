/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let cur = new Array(n).fill(1);
    for (let i = 1; i < m;i++){
        for (let j = 1; j < n; j++){
            cur[j] += cur[j-1] ;
        }
    }
    return cur[n-1];
};

let res = uniquePaths(2,3);
console.log(res)