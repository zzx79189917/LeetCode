/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort();
    let result = [], temp = [];
    let find =function(target,temp,index){
        for(let i=0;i<index;i++){
            if(candidates[i]>target){
                continue;
            }else if(candidates[i]===target){
                let arr = temp.concat([candidates[i]]);
                arr = arr.sort();
                let index = result.findIndex((item) => (item.toString() === arr.toString()));
                if(index>=0){
                    continue
                }
                result.push(arr);
            }else{
                find(target-candidates[i], temp.concat([candidates[i]]), i)
            }
        }
    }
    find(target,temp,candidates.length);
    return result;
};

let candidates = [10,1,2,7,6,1,5];
let target = 8;
let res = combinationSum2(candidates, target);
console.log(res);


let a = [[1,2,5],[1,2,6]]
let b = [1,2,5]

let ia = a.findIndex((item) => (item.toString() === b.toString()));
console.log(ia)