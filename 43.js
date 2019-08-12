/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let res = Array(len1+len2).fill(0).map(() => 0);
    if(num1=='0'||num2=='0') return '0';
    num1 = num1.split("").reverse();
    num2 = num2.split("").reverse();
    for(let i=0;i<len1;i++){
        let carry = 0;
        let l = len1 + len2 - 1 - i;
        for(let j=0;j<len2;j++){
            let s = num1[i] * num2[j] + res[l] + carry ;
            carry = (s / 10) | 0;
            res[l] = s%10;
            l--
        }
        if(l>=0 && carry !=0){
            res[l] = carry;
        }else if(l==0 && carry == 0){
            res[l] = '';
        }
    }
    return res.join('');
};

let a  = multiply('456', '123')
console.log(a)