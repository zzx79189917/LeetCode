/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length;
    if(len === 0 ){
        return -1;
    }
    return handler(0, len-1, nums, target)
}

function handler(l, r, nums, target){
    if(l>r) return -1;
    let mid = (l+r)/2 | 0;
    if(nums[mid]===target){
        return mid;
    }
    if(nums[r]>nums[mid]){
        if(nums[r]>=target && nums[mid]<=target){
            return handler(mid+1, r, nums, target);
        }
        return handler(l, mid-1, nums, target);
    }else{
        if(nums[l]<=target && nums[mid]>=target){
            return handler(l, mid - 1, nums, target);
        }
        return handler(mid + 1, r, nums, target);
    }
}

let nums = [4,5,6,7,0,1,2];
console.log(search(nums, 0))