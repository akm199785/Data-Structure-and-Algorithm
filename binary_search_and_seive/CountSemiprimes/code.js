// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    // prime store smallest prime factor of each number
    let prime = new Array(N + 1).fill(0);
    let i = 2;
    while (i * i <= N) {
        if (prime[i] == 0) {
            let k = i * i;
            while (k <= N) {
                if (prime[k] == 0)
                    prime[k] = i;
                k += i;
            }
        }
        i++;
    }
    // factor will store number whose number prime factor only 2
    let factor = new Array(N + 1).fill(0);
    for (let i = 2; i <= N; i++) {
        let k = i, cnt = 1;
        while (prime[k] > 0) {
            cnt++;
            k = k / prime[k];
        }
        if (cnt == 2)
            factor[i]++;
    }
    for (let i = 3; i <= N; i++)
        factor[i] += factor[i - 1];
    let M = P.length;
    let res = new Array(M);
    for (let i = 0; i < M; i++) {
        res[i] = factor[Q[i]] - factor[P[i] - 1];
    }
    return res;
}