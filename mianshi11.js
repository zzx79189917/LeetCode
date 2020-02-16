var minArray = function(numbers) {
    const length = numbers.length;
    if (!length) {
        return 0;
    }
    let left = 0,
        right = length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if(numbers[mid]>numbers[right]){
            left = mid + 1;
        }else if(numbers[mid]<numbers[right]){
            right = mid;
        }else {
            right--;
        }
    }
    return numbers[right];
};

let a = [3,4,5,1,2];
console.log(minArray(a))