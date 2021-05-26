// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function isPossible(A, eachBlockSize) {
    let N = A.length;
    let i = 0;
    while (i <= N - eachBlockSize) {
        let flag = false;
        for (let j = i; j < (i + eachBlockSize); j++) {
            if (j == 0 || j == N - 1)
                continue;
            if (A[j] > A[j - 1] && A[j] > A[j + 1]) {
                flag = true;
                break;
            }
        }
        if (flag === false)
            return false;
        i = i + eachBlockSize;
    }
    return true;

}
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    if (N <= 2)
        return 0;

    let arr = [];
    // to store the possible size of equal block
    for (let i = 1; i <= N; i++) {
        if (N % i === 0)
            arr.push(i);
    }
    //arr.sort((a,b)=> a-b);
    let low = 1, high = arr.length, mid = 0;
    let res = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (mid >= arr.length)
            break;
        if (isPossible(A, arr[mid])) {

            res = Math.max(res, Math.floor(N / arr[mid]));
            high = mid - 1;
        }
        else
            low = mid + 1;
    }
    return res;

}