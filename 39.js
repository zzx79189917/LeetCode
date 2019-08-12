/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [], temp = [];
    let find =function(target,temp,index){
        for(let i=index;i>=0;i--){
            if(candidates[i]>target){
                continue;
            }else if(candidates[i]===target){
                result.push(temp.concat([candidates[i]]));
            }else{
                find(target-candidates[i], temp.concat([candidates[i]]), i)
            }
        }
    }
    find(target,temp,candidates.length-1);
    return result;
};

let candidates = [2, 3, 6, 7];
let target = 7;
let res = combinationSum(candidates, target);
console.log(res);