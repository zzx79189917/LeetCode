/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let result = [];
    let len = nums.length;
    if(len<4){
        return result;
    }
    for(let i=0;i<len;i++){
        if(i!=0 && nums[i]==nums[i-1]){
            continue;
        }
        for(let j=i+1;j<len;j++){
            if(j!=i+1 && nums[j]==nums[j-1]){
                continue;
            }
            let l = j+1;
            let r = len-1;
            while(l<r){
                if(nums[l]+nums[r]+nums[i]+nums[j]==target){
                    result.push([nums[i],nums[j],nums[l],nums[r]]);
                    do{
                        l++; 
                     }while(nums[l]===nums[l-1]);
                }else if(nums[l]+nums[r]+nums[i]+nums[j]<target){
                    l++;
                }else{
                    r--;
                }
            }
        }
    }
    return result;
};

let nums = [1, 0, -1, 0, -2, 2];
let target = 0;
console.log(fourSum(nums, target));