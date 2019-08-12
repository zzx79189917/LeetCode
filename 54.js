/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length==0){
        return [];
    }
    let m = matrix.length;
    let n = matrix[0].length;
    let count = (Math.min(m,n)+ 1)/ 2 | 0;
    let i = 0;
    let res = [];
    while(i<count){
        for (let j = i; j < n-i; j++) {
            res.push(matrix[i][j]);
        }
        for (let j = i+1; j < m-i; j++) {
            res.push(matrix[j][n-1-i]);
        }
        for (let j = (n-1)-(i+1); j>=i && (m-1-i != i); j--) {
            res.push(matrix[m-1-i][j]);
        }
        for (let j = (m-1)-(i+1); j>=i+1 && (n-1-i != i) ; j--) {
            res.push(matrix[j][i]);
        }
        i++;
    }
    return res;
};

let a = [];
let b = spiralOrder(a);
console.log(b)