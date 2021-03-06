
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    if (N === 1)
        return 1;
    let cnt = 2, i = 2;
    for (i = 2; i * i < N; i++) {
        if (N % i === 0) {
            cnt += 2;
        }
    }
    if (i * i == N)
        cnt++;
    return cnt;
}