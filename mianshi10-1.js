/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if(n==1||n==2){
//         return 1;
//     }
//     return fib(n-2)+fib(n-1);
// };

var fib = function(n) {
    let arr = [0, 1];
    for(let i = 2; i <= n; i++){
        arr.push(arr[i-1]% 1000000007 + arr[i-2]% 1000000007);
    }
    return arr[n] % 1000000007;
};

console.log(fib(1000000008));