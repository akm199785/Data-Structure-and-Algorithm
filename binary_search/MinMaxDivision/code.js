// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function isPossible(A, K, mid) {
    let sum = 0, block = 1;
    for (let x of A) {
        if (sum + x > mid) {
            sum = x;
            block++;
            if (block > K)
                return false;
        }
        else
            sum += x;
    }
    return true;
}
function solution(K, M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let low = A[0], high = 0;
    for (let x of A) {
        high += x;
        if (low < x)
            low = x;
    }
    let res = high, mid = 0;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (isPossible(A, K, mid)) {
            res = Math.min(res, mid);
            high = mid - 1;
        }
        else
            low = mid + 1;
    }
    return res;
}