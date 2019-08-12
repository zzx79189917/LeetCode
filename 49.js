/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let keyRes = {};
    let res = [];
    for(let i=0;i<strs.length;i++){
        let temp = strs[i];
        let key = temp.split('').sort().join('');
        if(keyRes[key]==undefined){
            keyRes[key] = [temp];
        }else{
            keyRes[key].push(temp);
        }
    }
    for(let k in keyRes){
        res.push(keyRes[k]);
    }
    return res;
};

let a = ["eat", "tea", "tan", "ate", "nat", "bat"];
let b = groupAnagrams(a);
console.log(b)