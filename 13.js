/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let table = [
        {key:1000, value: 'M'}, 
        {key:900, value: 'CM'},
        {key:500, value:'D'},
        {key:400, value: 'CD'},
        {key:100, value:'C'},
        {key:90, value: 'XC'},
        {key:50, value: 'L'},
        {key:40, value: 'XL'},
        {key:10, value:'X'},
        {key:9, value:'IX'},
        {key:5, value:'V'},
        {key:4, value: 'IV'},
        {key:1, value:'I'}];
    let result = 0;
    for(let x=0; x< s.length; x++){
        for(let i =0;i<table.length;i++){
            if(x+1<=s.length && table[i].value == s[x]+s[x+1] ){
                result = result + parseInt(table[i].key);
                x = x+1;
                break;
            }
            if(table[i].value == s[x]){
                result = result + parseInt(table[i].key);
            }
        };
    }
    return result;
};

console.log(romanToInt("IV"));