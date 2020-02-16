/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    if(k<0){
        return 0;
    }
    let ans = 0;
    let arr = [];
    for(let i=0;i<m;i++){
        arr[i] = [];
        for(let j=0; j<n; j++){
            arr[i][j] = true;
        }
    }
    cal(0,0);
    return ans;
    function cal(x, y){
        if(x>=0 && x<m && y>=0 && y<n){
            if(arr[x][y] && sum(x)+sum(y)<=k){
                ans++;
                arr[x][y] = false;
                cal(x+1, y);
                cal(x-1, y);
                cal(x, y+1);
                cal(x, y-1);
            }
        }
    }
    function sum(num){
        let sum = 0
        while(num>0){
            sum+=num%10
            num = Math.floor(num/10)
        }
        return sum
    }
};

let a = movingCount(1,2,1);
console.log(a)