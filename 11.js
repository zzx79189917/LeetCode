/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length-1;
    let result = 0;
    while(i <= j){
        result = Math.max(result, Math.min(height[i],height[j])*(j-i));
        if(height[i]<height[j]){
            i++;
        }else{
            j--;
        }
    }
    return result;
};

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height))