/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length == 0 || numRows <= 0){
        return "";
    }
    if(numRows == 1){
        return s;
    }

    var size = 2*numRows -2
    var len = s.length;
    var res = [];
    for(var i = 0; i< numRows ; i++){
        for(var j=i; j<len; j=j+size){
            res.push(s[j]);
            if(i!=0 && i!= numRows-1){
                var temp = j + size - 2*i;
                if(temp<len){
                    res.push(s[temp])
                }
            }
        }
    }
    var res2 = res.join("");
    return res2;
};

let s = "LEETCODEISHIRING";
let numRows = 3;

console.log(convert(s,numRows));