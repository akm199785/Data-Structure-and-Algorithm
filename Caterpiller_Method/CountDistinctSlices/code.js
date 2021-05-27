// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let hash = new Array(M + 1).fill(-1);
    let res = 0, i = 0;
    for (let j = 0; j < A.length; j++) {
        i = Math.max(i, hash[A[j]] + 1);
        let len = j - i + 1;
        res = res + len;
        hash[A[j]] = j;
    }
    return res <= 1000000000 ? res : 1000000000;
}