/**
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function(nums) {
//     const map = {};
//     for (const num of nums) {
//         if (!map[num]) {
//             map[num] = true;
//         } else {
//             return num;
//         }
//     }
// };
var findRepeatNumber = function(nums) {
    let len = nums.length;
    for(let i=0; i<len; i++){
        let num = nums[i];
        if(num === i){
            continue;
        }
        if(num === nums[i]){
            return num;
        }else{
            [nums[i], nums[num]] = [nums[num], nums[i]];
        }
    }
};
let a = [2, 3, 1, 0, 2, 5, 3];
let b = findRepeatNumber(a);
console.log(b)