/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = s.length;
    while(s[len-1] == ' '){
        len--;
    }
    if(len==0){
        return 0;
    }
    let h = len;
    while(s[h-1] != ' ' && h>0){
        h--;
    }
    return len-h;
};

let a = 'hello world';
let b = lengthOfLastWord(a)
console.log(b)