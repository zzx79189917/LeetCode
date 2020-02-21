/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    return nums.sort((a, b) => {
        if(`${a}${b}` - `${b}${a}` > 0) {
            return 1;
        }else{
            return -1;
        }
    }).join('');
};