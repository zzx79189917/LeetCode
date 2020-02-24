/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var singleNumbers = function(nums) {
//     let a = {};
//     for(let i = 0; i<nums.length; i++){
//         if(a[nums[i]] !== undefined){
//             a[nums[i]] += 1;
//         }else{
//             a[nums[i]] = 1 ;
//         }
//     }
//     let res = [];
//     for(let item in a){
//         if(a[item] === 1){
//             res.push(item);
//         }
//     }
//     return res;
// };

var singleNumbers = function(nums) {
    let res = [];
    let common = 1;
    let sum = 0;
    for(let num of nums){
        sum ^= num;
        console.log(sum)
    }
    console.log(sum)
    while((common & sum) == 0){
        common <<= 1;
    }
    for(let num of nums){
        if((num & common) == 0){
            res[0] ^= num;
        }else{
            res[1] ^= num;
        }
    }
    return res;
};

console.log(singleNumbers([4,1,4,6]))