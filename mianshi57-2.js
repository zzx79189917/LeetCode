/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let low = 1, high = 2;
    let res = [];
    while(low<high){
        let sum = (low+high)*(high-low+1)/2;
        if(sum === target){
            let tmp = [];
            for(let i=low; i<=high; i++){
                tmp.push(i);
            }
            res.push(tmp);
            low++;
        }else if(sum<target){
            high++;
        }else{
            low++;
        }
    }
    return res;
};