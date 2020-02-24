/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    for(let i=0; i<grid.length; i++){
        for( let j=0; j<grid[0].length; j++){
            if(i===0 && j===0){
                continue;
            }
            if(i===0 && j>=1){
                grid[i][j] = grid[i][j-1] + grid[i][j];
            }else if(j===0 && i>=1){
                grid[i][j] = grid[i-1][j] + grid[i][j];
            }else{
                let tmp1 = grid[i][j-1] + grid[i][j];
                let tmp2 = grid[i-1][j] + grid[i][j];
                grid[i][j] = Math.max(tmp1, tmp2);
            }
        }
    }
    return grid[grid.length-1][grid[0].length-1];
};