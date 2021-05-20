// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b);
    //console.log(A);
    if (A.length < 3)
        return 0;
    for (var i = 2; i < A.length; i++) {
        if (((A[i - 1] + A[i - 2]) > A[i]) && ((A[i - 2] + A[i]) > A[i - 1]) && ((A[i - 1] + A[i]) > A[i - 2]))
            return 1;
    }
    return 0;

}