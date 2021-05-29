// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = S.length;
    if (N === 0)
        return -1;
    if (N === 1)
        return 0;
    if (N % 2 === 0)
        return -1;
    let mid = Math.floor(N / 2);
    let i = mid - 1, j = mid + 1;
    while (i >= 0 && j < N) {
        if (S.charAt(i) !== S.charAt(j))
            return -1;
        i--;
        j++;
    }
    return mid;
}