/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let str = num.toString();
    let len = str.length;
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i=1; i< len; i++){
        console.log(str[i-1], str.substr(i-1,2));
        if(str[i-1] == '0' || str.substr(i-1,2)>'25'){
            dp[i+1] = dp[i];
        }else{
            dp[i+1] = dp[i] + dp[i-1];
        }
    }
    console.log(dp)
    return dp[len];
};

console.log(translateNum(25))