/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max_value = Math.pow(2,31) - 1;
    const min_value = -Math.pow(2,31);
    let result = 0;
    if(result<min_value || x>max_value){
        return result;
    }
    while(x){
        result = result*10 + x%10;
        x = parseInt(x/10);
    }
    if(result<min_value || result>max_value){
        return 0;
    }
    return result;
};


console.log(reverse(1534236469))
