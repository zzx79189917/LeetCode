/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle=='' || needle.length == 0){
        return 0;
    }
    let i=0;
    let j=0;
    while(i<haystack.length && j<needle.length){
        if(haystack[i] == needle[j]){
            j++;
        }else{
            i=i-j;
            j=0;
        }
        i++;
    }
    return j == needle.length ?i-j : -1;
};

let haystack = "aaaaa";
let needle = "bba";
console.log(strStr(haystack,needle))