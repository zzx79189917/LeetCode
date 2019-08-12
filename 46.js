/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length == 0){
        return [];
    }
    if(nums.length == 1){
        return [nums];
    }
    let res = [];
    dfs(nums, [],  res);
    return res;

    function dfs(nums, path, res){
        if(path.length == nums.length){
            res.push(path);
            return;
        }
        for (let i of nums){
            if(path.indexOf(i)<0){
                path.push(i)
                dfs(nums, [...path], res);
                path.pop();
            }
        }
    }
};

let a = permute([1,2,3]);
console.log(a)

