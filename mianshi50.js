/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    if(s==='') return ' ';
    let tmp = [];
    let charArr = [];
    for(let i=0 ; i<s.length; i++){
        if(tmp[s[i]]===undefined){
            tmp[s[i]] = 1;
            charArr.push(s[i]);
        }else{
            tmp[s[i]] ++;
        }
    }
    for(let i=0; i<charArr.length; i++){
        if(tmp[charArr[i]]===1){
            return charArr[i];
        }
    }
    return ' ';
};
console.log(firstUniqChar('lol'));