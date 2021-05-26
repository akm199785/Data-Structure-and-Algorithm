// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function gcd(a, b) {
    if (b === 0)
        return a;
    return gcd(b, a % b);
}
function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    let gc = gcd(N, M);
    return N / gc;
}