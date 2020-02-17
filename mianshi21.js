/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let len = nums.length;
    if(!len){
        return [];
    }
    let i=0, j=len-1;
    while(i<j){
        while(nums[i]%2===1 && i<len){
            i++;
        }
        if(nums[j]%2===0 && j>=0){
            j--;
        }
        if(i<j){
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    return nums;
};

let a = [1,2,3,4];
console.log(exchange(a))