// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    if (N < 3)
        return 0;
    A.sort((a, b) => (a - b));
    let cnt = 0;
    for (let i = N - 1; i >= 2; i--) {
        let j = 0, k = i - 1;
        while (j < k) {
            if ((A[j] + A[k]) > A[i]) {
                cnt += (k - j);
                k--;
            }
            else
                j++;
        }
    }
    return cnt;
}