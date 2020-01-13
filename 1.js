/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++){
        if(map[target - nums[i] ] >= 0){
            return [ map[target - nums[i] ], i]
        }
        map[nums[i]] = i;            
     }
}

// var twoSum = function(nums, target) {
//     let newArr = nums.sort();
//     let len = newArr.length;
//     let q = 0, p = len-1;
//     while(nums[q]+nums[p]!=target){
//         if(nums[q]+nums[p]>target){
//             q--;
//         }else{
//             p++;
//         }
//     }
//     return [p, q];
// }

let a = [1,2,3,4];
let t = 5;
let res = twoSum(a, t);
console.log(res)