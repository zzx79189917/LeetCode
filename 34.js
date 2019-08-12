/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let len = nums.length;
    if(len === 0) return [-1, -1];
    return hanlderRange(0, len-1, nums, target);
};

function hanlderRange(l, r, nums, target){
    if(l>r) return [-1, -1];
    let mid = (l+r)/2 | 0;
    if(nums[mid] === target){
        let q = mid ;
        let p = mid ;
        while(nums[q]===target || nums[p]===target){
            if(nums[q]===target){
                q--;
            }
            if(nums[p]===target){
                p++;
            }
        }
        if(q+1===q-1){
            return [p];
        }
        return [q+1,p-1];
    }
    if(nums[r]>nums[mid]){
        if(nums[r]>=target && nums[mid]<=target){
            return hanlderRange(mid+1, r, nums, target);
        }
        return hanlderRange(l, mid-1, nums, target);
    }else{
        if(nums[l]<=target && nums[mid]>= target){
            return hanlderRange(l, mid-1, nums, target);
        }
        return hanlderRange(mid+1, r, nums, target);
    }
}

let nums = [5,7,7,8,8,10];
let res = searchRange(nums, 6);
console.log(res)
