/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*var canJump = function(nums) {
    return canJumpFromPosition(0, nums);
};

var canJumpFromPosition = function(position, nums){
    if(position == nums.length-1){
        return true;
    }

    let fp = Math.min(position+nums[position], nums.length-1);
    for (let np = position+1; np <= fp; np++) {
        if(canJumpFromPosition(np, nums)){
            return true;
        }
    }
    return false;
}*/

/*var Index = {
    GOOD: 0,
    BAD:1,
    UNKNOWN: 2,
}
var canJump = function(nums) {
    let memo = [];
    for (let i = 0; i < nums.length; i++) {
        memo[i] = Index.UNKNOWN;
    }
    memo[memo.length - 1] = Index.GOOD;
    console.log(memo)
    for (let i = nums.length-2; i >= 0; i--) {
        let fj = Math.min(i+nums[i], nums.length-1);
        for(let j = i+1; j<=fj; j++){
            if(memo[j]==Index.GOOD){
                memo[i] = Index.GOOD;
                break;
            }
        }
    }
    return memo[0]==Index.GOOD;
};*/

var canJump = function(nums) {
    let lastPos = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        console.log(i)
        if (i + nums[i] >= lastPos) {
            lastPos = i;
        }
        console.log(lastPos)
    }
    return lastPos == 0;
}




let a = [2,3,1,1,4];
console.log(canJump(a));
// let b = [3,2,1,0,4];
// console.log(canJump(b));