/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++){
        if(map[target - nums[i] ] >= 0){
            return [ nums[i], target-nums[i]];
        }
        map[nums[i]] = i;            
    }
};

console.log(twoSum([2,11,7,15], 9))