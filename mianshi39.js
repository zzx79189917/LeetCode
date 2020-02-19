/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length;
    let tmp = [];
    for(let i=0; i<len; i++){
        if(tmp[nums[i]]){
            tmp[nums[i]]++;
        }else{
            tmp[nums[i]] = 1;
        }
        if(temp[nums[i]]>len/2){
            return nums[i];
        }
    }
};