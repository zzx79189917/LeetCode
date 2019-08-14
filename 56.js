/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {
//     let res = [];
//     intervals.sort(function(a,b){
//         return a[0]-b[0];
//     });
//     let len = intervals.length;
//     let target_idx = 0;
//         for (let i=1; i<len;i++){
//             if (intervals[i][0] <= intervals[target_idx][1]){
//                 intervals[target_idx][1] = Math.max(intervals[i][1], intervals[target_idx][1])
//                 intervals[i] = [];
//             }else{
//                 target_idx = i;
//             }
//         }
//         for(let item of intervals){
//             if(item.length>0){
//                 res.push(item);
//             }
//         }
//         return res;
// };

var merge = function(intervals) {
    intervals.sort(function(a,b){
        return a[0]-b[0];
    });
    let len = intervals.length;
    let target_index = 0;
    let candidate_index = 1;
    while(candidate_index<len){
        if(intervals[candidate_index][0]<=intervals[target_index][1]){
            intervals[target_index][1] = Math.max(intervals[target_index][1], intervals[candidate_index][1]);
            intervals.splice(candidate_index,1);
            len--;
        }else{
            target_index = candidate_index;
            candidate_index ++;
        }
    }
    return intervals;
};

let a = [[2,3],[0,1],[1,2],[3,4],[4,5],[1,1],[0,1],[4,6],[5,7],[1,1],[3,5]];
let b = merge(a)
console.log(b)