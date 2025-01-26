function findSumZero(array){
    let left = 0;
    let right = array.length - 1;

    while(left < right){
        sum = array[left] + array[right];
        if(sum === 0){
            return [array[left], array[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

const result = findSumZero([-5, -4, -3, -2, 0, 1, 2, 4, 8]);
console.log("result", result);
