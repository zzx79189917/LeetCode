/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const max_value = Math.pow(2,31) - 1;
    const min_value = -Math.pow(2,31);
    let flag = 0;
    let result = 0;
    str = str.replace(/^\s*/,"");
    let len = str.length;
    if(len == 0){
        return 0
    }
    if(str[0] == '-'){
        flag = 1;
    }else if(str[0] == '+'){
        str = str.substr(1);
        len = len -1;
    }
    
    if((str[0]<'0' || str[0]>'9') && str[0] != '-'){
        return result;
    }
    let i =0;
    if(flag == 1){
        i =1;
    }
    for(;i<len;i++){
        if(str[i]<'0' || str[i]>'9'){
            break;
        }
        result = result*10 + parseInt(str[i]);
    }
    if(flag == 1){
        if(-result<min_value){
            return min_value;
        }else{
            result = -result;
        }
    }else{
        if(result>max_value){
            return max_value;
        }
    }
    return result;
};


console.log(myAtoi("+42"))