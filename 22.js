/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    backtrack(result, '', 0, 0, n);
    return result;
};

var backtrack = function(result, cur, open, close, n){
    if (cur.length == n * 2) {
        result.push(cur);
        return;
    }
    if (open < n)
        backtrack(result, cur+"(", open+1, close, n);
    if (close < open)
        backtrack(result, cur+")", open, close+1, n);
}

console.log(generateParenthesis(3))

