/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let len = s.length;
    if(len%2 !=0){
        return false;
    }
    for(let i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='[' || s[i]=='{'){
            arr.push(s[i]);
        }
        if(s[i]==')'){
            let tmp = arr.pop();
            if(tmp == '('){
                continue;
            }else{
                return false;
            }
        }
        if(s[i]=='}'){
            let tmp = arr.pop();
            if(tmp == '{'){
                continue;
            }else{
                return false;
            }
        }
        if(s[i]==']'){
            let tmp = arr.pop();
            if(tmp == '['){
                continue;
            }else{
                return false;
            }
        }
    }
    return true;
};

console.log(isValid("["))

