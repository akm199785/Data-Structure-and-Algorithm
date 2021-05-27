// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length
    let i = 0;
    while (i < N && A[i] < 0)
        i++;
    let j = i - 1, k = i, cnt = 0;
    while (j >= 0 && i < N) {
        while (j > 0 && A[j] === A[j - 1])
            j--;
        while (i < N - 1 && A[i] === A[i + 1])
            i++;
        if (Math.abs(A[j]) === A[i]) {
            i++;
            j--;
            cnt++;
        }
        else if (Math.abs(A[j]) > A[i]) {
            cnt++;
            i++;
        }
        else {
            cnt++;
            j--;
        }
    }
    while (j >= 0) {
        if (j === 0) {
            cnt++;
            break;
        }
        if (A[j] === A[j - 1]) {

            j--;
        }
        else {
            cnt++;
            j--;
        }
    }

    while (i <= N - 1) {
        if (i === N - 1) {
            cnt++;
            break;
        }
        if (A[i] === A[i + 1])
            i++;
        else {
            cnt++;
            i++;
        }
    }
    return cnt;
}