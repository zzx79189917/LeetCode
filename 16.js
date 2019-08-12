/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    var minNum = Math.pow(2,32)-1;
    for(let i=0;i<len;i++){
        if(i>0&&nums[i]==nums[i-1]){
            continue;
        }
        l = i+1;
        r = len-1;
        while(l<r){
            let current = nums[i]+nums[l]+nums[r];
            if(current==target){
                return target;
            }
            if(Math.abs(minNum-target)>Math.abs(current-target)){
                minNum = current;
            }
            if(current>target){
                r--;
            }
            if(current<target){
                l++;
            }
        }
    }
    return minNum;
};

let nums = [0,1,2];
let target = 1;
console.log(threeSumClosest(nums,target))