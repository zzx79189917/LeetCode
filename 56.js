/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    intervals.sort(function(a,b){
        return a[0]-b[0] >0;
    });
    let len = intervals.length;
    let target_idx = 0;
        for (let i=1; i<len;i++){
            if (intervals[i][0] <= intervals[target_idx][1]){
                intervals[target_idx][1] = Math.max(intervals[i][1], intervals[target_idx][1])
                intervals[i] = [];
            }else{
                target_idx = i;
            }
        }
        for(let item of intervals){
            if(item.length>0){
                res.push(item);
            }
        }
        return res;
};

let a = [[1,4],[0,4]];
let b = merge(a)
console.log(b)