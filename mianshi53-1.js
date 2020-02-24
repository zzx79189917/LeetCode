/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let tmp = nums[mid];
        if(target>tmp){
            left = mid + 1;
        }else if(target < tmp){
            right = mid - 1;
        }else {
            if (nums[left] !== target) {
                left = left + 1;
            } else if (nums[right] !== target) {
                right = right - 1;
            } else {
                return right - left + 1;
            }
        }
    }
    return 0;
};