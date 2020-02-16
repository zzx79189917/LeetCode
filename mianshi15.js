var hammingWeight = function(n) {
    let count = 0;
    let flag = 1;
    let times = 0;
    while (times++ < 32) {
        if (flag & n) {
            count += 1;
        }
        flag = flag << 1;
    }

    return count;
};

console.log(hammingWeight(1001))