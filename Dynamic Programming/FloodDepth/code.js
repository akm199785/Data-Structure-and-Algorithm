// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    if (N === 1)
        return 0;
    let left = new Array(N).fill(0);
    left[0] = A[0];
    for (let i = 1; i < N; i++) {
        left[i] = Math.max(left[i - 1], A[i]);
    }
    let right = new Array(N).fill(0);
    right[N - 1] = A[N - 1];
    for (let i = N - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], A[i]);
    }
    let res = 0;
    for (let i = 1; i < N - 1; i++) {
        let depth = Math.min(left[i] - A[i], right[i] - A[i]);
        if (res < depth)
            res = depth;
    }
    return res;
}