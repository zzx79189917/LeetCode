/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let len = nums.length;
    let target;
    for(let i=0;i<len;i++){
        if(target == nums[i]){
            continue;
        }else{
            target = nums[i]
        }
        let l=i+1;
        let r=len-1;
        while(l<r){
            if(nums[l]+nums[r]==-target){
                result.push([target,nums[l],nums[r]]);
                do{
                    l++; 
                 }while(nums[l]===nums[l-1]);
            }else if(nums[l]+nums[r]<-target){
                l++;
            }else{
                r--;
            }
        }
    }
    return result;
};

let nums = [0,0,0,0,0];
console.log(threeSum(nums));