/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let len = nums.length;
    if(len === 0 ){
        return 0;
    }
    if(nums[0]>target){
        return 0;
    }
    if(nums[len-1]<target){
        return len;
    }
    return handlerInsert(0, len-1, nums, target)
}

function handlerInsert(l, r, nums, target){
    if(l>r) return -1;
    let mid = (l+r)/2 | 0;
    if(nums[mid] === target){
        return mid;
    }else if(nums[mid]<target && nums[mid+1]>target){
        return mid+1;
    }
    if(nums[mid]>=target){
        return handlerInsert(l, mid-1, nums, target);
    }else {
        return handlerInsert(mid+1, r, nums, target);
    }
}

let nums = [1,3,5,6];
let res = searchInsert(nums, 7);
console.log(res)