/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let reverse = function(nums,i,j){
        while (i < j){
            let tmp = nums[j];
            nums[j] = nums[i];
            nums[i] = tmp;
            i += 1;
            j -= 1;
        }
    }
    let firstIndex = -1;
    let len = nums.length;
    if(len<=1){
        return nums;
    }
    for(let i=len-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            firstIndex = i;
            break;
        }
    }
    if (firstIndex == -1){
        reverse(nums, 0, len-1);
        return nums;
    }
    let secondIndex = -1;
    for(let j=len-1; j>firstIndex;j--){
        console.log(j,nums[j],nums[firstIndex])
        if(nums[j]>nums[firstIndex]){
            secondIndex = j;
            break;
        }
    }
    console.log(firstIndex,secondIndex)
    let tmp = nums[secondIndex];
    nums[secondIndex] = nums[firstIndex];
    nums[firstIndex] = tmp;
    console.log(nums)
    reverse(nums, firstIndex+1,len-1)
    return nums;
};


console.log(nextPermutation([1,2,7,4,3,1]));