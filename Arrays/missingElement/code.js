// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var len = A.length;
    var max = A[0];
    for (var x = 0; x < len; x++) {
        if (max < A[x])
            max = A[x];
    }
    if (max <= 0)
        return 1;
    var arr = new Array(max + 1).fill(0);
    for (var i = 0; i < len; i++) {
        if (A[i] >= 1) {
            arr[A[i]]++;

        }
    }
    //console.log(max);
    for (var i = 1; i < (max + 1); i++) {
        if (arr[i] == 0) {
            // console.log(i);
            return i;
        }
    }
    return max + 1;
}