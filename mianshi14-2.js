var cuttingRope = function(n) {
    if (n <= 3) return n - 1;

    let res = 1;
    while (n > 4) {
        n -= 3;
        res = (res * 3) % 1000000007;
    }
    return (n * res) % 1000000007;
};