/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let list = [];
    for(let i=0; i<n; i++){
        list.push(i);
    }
    let c = (m-1)%n;
    while(list.length !== 1){
        list.splice(c, 1);
        c = (c+m-1)%list.length;
    }
    return list[0];
};

console.log(lastRemaining(5,3));