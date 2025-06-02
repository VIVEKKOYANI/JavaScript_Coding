var mySqrt = (x) => { 
    if (x < 2) return x;

    let left = 1, right = x, ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};

mySqrt(8); // returns 2, because sqrt(8) ≈ 2.828 and we return the integer part
mySqrt(16); // returns 4