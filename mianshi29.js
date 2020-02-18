/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let len = matrix.length;
    if(len===0){
        return [];
    }
    let n = len-1;
    let m = matrix[0].length - 1;
    let row = 0, col = 0;
    let res = [];
    while(row<=n && col<=m){
        for(let c=col; c<= m; c++){
            res.push(matrix[row][c]);
        }
        for(let r=row+1; r<=n; r++){
            res.push(matrix[r][m]);
        }
        if (row < n && col < m) {
            for (let c = m - 1; c > col; c--){
                res.push(matrix[n][c]);
            } 
            for (let r = n; r > row; r--){
                res.push(matrix[r][col]);
            } 
        }
        row++;
        n--;
        col++;
        m--;
    }
    return res;
};

let a = [[3]];
console.log(spiralOrder(a));