// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length
    let i = 0;
    A.sort((a, b) => a - b);
    while (i < N && A[i] < 0)
        i++;
    let j = i - 1, k = i, sum = Math.abs(A[0] + A[0]);
    while (j >= 0 && i < N) {
        sum = Math.min(sum, Math.abs(A[i] + A[i]));
        sum = Math.min(sum, Math.abs(A[j] + A[i]));
        sum = Math.min(sum, Math.abs(A[j] + A[j]));
        while (j > 0 && A[j] === A[j - 1])
            j--;
        while (i < N - 1 && A[i] === A[i + 1])
            i++;
        if (Math.abs(A[j]) === A[i]) {
            i++;
            j--;

        }
        else if (Math.abs(A[j]) > A[i])
            i++;
        else
            j--;

    }
    while (j >= 0) {
        sum = Math.min(sum, Math.abs(A[j] + A[j]));
        if (j === 0)
            break;
        if (A[j] === A[j - 1]) {
            j--;
        }
        else {
            j--;
        }
    }

    while (i <= N - 1) {
        sum = Math.min(sum, Math.abs(A[i] + A[i]));
        if (i === N - 1) {

            break;
        }
        if (A[i] === A[i + 1]) {

            i++;
        }
        else {

            i++;
        }
    }
    return sum;
}