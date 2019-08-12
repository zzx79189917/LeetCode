/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    let end1 = ((n + 1) / 2)| 0;
    let end2 = (n / 2) | 0;
    for (let i = 0; i < end1; i++) {
      for (let j = 0; j <  end2; j++) {
        let temp = matrix[n - 1 - j][i];
        matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
        matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 -i];
        matrix[j][n - 1 - i] = matrix[i][j];
        matrix[i][j] = temp;
      }
    }
};
let matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
rotate(matrix)