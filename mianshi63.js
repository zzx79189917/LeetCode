/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let price = Infinity;
    for(let i = 0; i < prices.length; i++){
        price = Math.min(price, prices[i]);
        profit = Math.max(profit, prices[i] - price);
        console.log(price, profit, prices[i]);
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]))