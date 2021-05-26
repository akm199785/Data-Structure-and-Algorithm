// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function numberOfNonDivisors(hash, num, N) {
    let cnt = N;
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            let div1 = num / i, div2 = i;
            if (hash[div2] !== 0)
                cnt = cnt - hash[div2];
            if ((div1 !== div2) && (hash[div1] !== 0))
                cnt = cnt - hash[div1];
        }
    }
    return cnt;
}
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    let hash = new Array(2 * N + 1).fill(0);
    for (let x of A) {
        hash[x]++;
    }
    let res = new Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        let cnt = numberOfNonDivisors(hash, A[i], N);
        //console.log(cnt);
        res[i] = cnt;
    }
    return res;
}