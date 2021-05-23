function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    let best = A[0], sum = 0;
    for (let x of A) {
        sum = Math.max(sum + x, x);
        best = Math.max(best, sum);
    }
    return best;
}