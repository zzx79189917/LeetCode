/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let count = (n + 1)/ 2 | 0;
    let i = 0;
    let res = [];
    for(let k=0;k<n;k++){
        res.push([]);
    }
    let num = 1;
    while(i<count){
        for (let j = i; j < n-i; j++) {
            res[i][j] = num;
            num++;
        }
        for (let j = i+1; j < n-i; j++) {
            res[j][n-1-i] = num;
            num++;
        }
        for (let j = (n-1)-(i+1); j>=i && (n-1-i != i); j--) {
            res[n-1-i][j] = num;
            num++;
        }
        for (let j = (n-1)-(i+1); j>=i+1 && (n-1-i != i) ; j--) {
            res[j][i] = num;
            num++;
        }
        i++;
    }
    return res;
};

let a = generateMatrix(0)
console.log(a)