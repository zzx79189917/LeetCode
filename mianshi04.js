/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let rowLen = matrix.length;
    if(!rowLen){
        return false;
    }
    let colLen = matrix[0].length;
    if(!colLen){
        return false;
    }
    let row = 0, col = colLen - 1;
    while(row<rowLen && col>=0){
        if(matrix[row][col] === target){
            return true;
        }else if(matrix[row][col]>target){
            --col;
        }else {
            ++row;
        }
    }
    return false;
};

let a = [ [1,   4,  7, 11, 15],[2,   5,  8, 12, 19],[3,   6,  9, 16, 22],[10, 13, 14, 17, 24],[18, 21, 23, 26, 30]];
console.log(findNumberIn2DArray(a,5));