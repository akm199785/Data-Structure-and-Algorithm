function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    let arr = new Array(N + 1).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    let mod = 1 << 30;
    for (let i = 3; i <= N; i++)
        arr[i] = (arr[i - 1] % mod + arr[i - 2] % mod) % mod;
    let res = new Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        let ways = arr[A[i]] % (1 << B[i]);
        //console.log((1<<B[i]));
        res[i] = ways;
    }
    return res;
}