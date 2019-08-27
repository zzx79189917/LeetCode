/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const nums = [...Array(n)].map((vo, i) => i + 1);
    const re = [];
    let nextK = k;
    for (let i = n; i > 0; i--) {
      const factorialN = factorial(i - 1);
      const num = Math.ceil(nextK / factorialN);
      re.push(nums.splice(num - 1, 1));
      nextK = (nextK % factorialN) || factorialN;
    }
    return re.join('');
  };
  
function factorial(n) {
if (n <= 1) {
    return 1;
}
return factorial(n - 1) * n;
}