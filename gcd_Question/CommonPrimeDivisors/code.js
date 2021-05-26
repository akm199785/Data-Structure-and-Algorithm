// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/*
Dividing by the GCD eliminates the common part of among the two number. And if eventually the dividend becomes 1, that means that the common part was the only part present.


As an example consider M = 2^2 \times 3^3 \times 5^2 and N = 2^1 \times 3^1 \times 5^1, GCD(M,N) = N and M' = 2^1 \times 3^2 \times 5^1. Repeting the process leads to GCD(M',N) = N and M'' = 3^1 and GCD(M'',N) = 3 and M''' = 1.

This shows that the set of prime divisor of M is contained in the set of prime divisor of N.

If we can show that the set of N is included in M's one, than the two sets must be equal. It is sufficient to do the same process with roles of N and M swapped.

If apply the same process to swapping the values of M and N from the previous example we obtain that M = 2^1 \times 3^1 \times 5^1 and N =2^2 \times 3^3 \times 5^2, GCD(M,N) = N and M' = 1.


If there is a divisor that is not common to both number then the process will eventually isolate it.

Imagine that M = 2^2 \times 3^3 \times 5^2 \times 11 and N = 2^1 \times 3^1 \times 5^1. All common divisors will be cancelled out by repeting the division by the GCD leaving M=11 and N=2^1 \times 3^1 \times 5^1.


Finally, the following is a possible implementation of the overall previous idea, which is also much simpler and cleaner than the one presented in the previous section.
*/
function _gcd(a, b) {
    if (b == 0)
        return a;
    return _gcd(b, a % b);
}
function checker(M, N) {
    g = _gcd(M, N);
    while (g !== 1) {
        M = M / g;
        g = _gcd(M, N);
    }
    return M === 1 ? true : false;
}
function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length, cnt = 0;
    for (let i = 0; i < N; i++) {
        if (checker(A[i], B[i]) && checker(B[i], A[i]))
            cnt++;
    }
    return cnt;

}