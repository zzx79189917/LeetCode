/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let left = 0, right = nums.length;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        let tmp = nums[mid];
        if(tmp != mid){
            right = mid;
        }else{
            left = mid -1;
        }
    }
    return left;
};