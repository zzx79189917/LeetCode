/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let resSet = new Set();
    let n = nums.length;
    function backtrack(first){
        if(first == n){
            resSet.add([...nums].join(','));
        }
        for(let i=first;i<n;i++){
            [nums[first], nums[i]] = [nums[i], nums[first]];
            backtrack(first+1);
            [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    }
    backtrack(0)
    let res = [];
    for(let item of resSet){
        let temp = [];
        (item.split(',')).forEach(element => {
            temp.push(parseInt(element))
        });
        res.push(temp);
    }
    return res;
};

let a = permuteUnique([-1,2,-1,2,1,-1,2,1]);
console.log(a)