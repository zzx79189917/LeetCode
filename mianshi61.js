/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    nums.sort((a,b)=>{ return a-b});
    let sub = 0;
    for(let i=0; i<4 ;i++){
        if(nums[i]===0) continue;
        if(nums[i]===nums[i+1]) return false;
        sub = sub+nums[i+1]-nums[i];
    }
    return sub<5;
};

console.log(isStraight([10,11,0,12,6]))