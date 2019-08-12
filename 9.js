/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x;
    let result = 0;
    if(x<0){
        return false;
    }
    while(x!=0){
        result = result *10  + (x%10);
        x = parseInt(x/10);
    }
    if(num==result){
        return true;
    }
    return false;
};

console.log(isPalindrome(10))