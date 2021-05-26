
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function isPossible(arr, flag) {
    let cnt = 1, start = 0;
    for (let end = 1; end < arr.length; end++) {
        if ((arr[end] - arr[start]) >= flag) {
            cnt++;
            start = end;
        }
        if (cnt >= flag)
            return true;
    }
    return cnt >= flag ? true : false;
}
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    if (N <= 2)
        return 0;
    let arr = [];
    for (let i = 1; i < N - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1])
            arr.push(i);

    }
    if (arr.length <= 1)
        return arr.length;
    let low = 1, high = arr.length, mid = 0;
    let res = 0;
    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        if (isPossible(arr, mid)) {
            res = Math.max(res, mid);
            low = mid + 1;
        }
        else
            high = mid - 1;
    }
    //console.log(res);
    return res;
}