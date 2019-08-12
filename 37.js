/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    return say(1,'1',n);
};

function say(index, str, n){
    if(index===n){
        return str;
    }
    let newStr = '';
    index++;
    let k=1;
    for(let i=0;i<str.length;i++){
        if(str[i]==str[i+1] && i+1<str.length){
            k++;
        }else{
            newStr=newStr+k;
            newStr=newStr+str[i];
            k=1;
        }
    }
    return say(index, newStr, n);
}

console.log(countAndSay(5))