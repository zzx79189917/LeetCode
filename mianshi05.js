/**
 * @param {string} s
 * @return {string}
 */
// var replaceSpace = function(s) {
//     return s.replace(/ /g, "%20");
// };

var replaceSpace = function(s) {
    if(!s||!s.length){
        return '';
    }
    let emptyLen = 0, charLen = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === ' '){
            emptyLen++;
        }else{
            charLen++;
        }
    }
    let len = 3*emptyLen+charLen;
    let res = new Array(len);
    for(let i=0,j=0; j<s.length;j++){
        if(s[j]===' '){
            res[i++] = '%';
            res[i++] = '2';
            res[i++] = '0';
        }else{
            res[i++] = s[j];
        }
    }
    return res.join('');
};

let a = replaceSpace('a b c');
console.log(a)