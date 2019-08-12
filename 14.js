var longestCommonPrefix = function(strs) {
    if(strs === []){
        return ''
    }
    var result = strs[0]||'';
    var maxlength = 0;
    for(var i = 0;i < strs.length;i++){
        for(var j = 0;j < result.length;j++){
            console.log(result[j], strs[i][j]);
            if(result[j] !== strs[i][j]){
                result = result.slice(0,j);
                break;
            }
        }

    }
    return result
};
let a = ["flower","flow","flight"];
console.log(longestCommonPrefix(a))