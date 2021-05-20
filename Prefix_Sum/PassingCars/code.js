function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var N = A.length;
    if (N === 1)
        return 0;
    var numberOfOneInRightSide = new Array(N).fill(0);
    for (var i = 0; i < N; i++) {
        if (A[i] === 1)
            numberOfOneInRightSide[i]++;
    }
    for (var i = N - 2; i >= 0; i--) {
        numberOfOneInRightSide[i] += numberOfOneInRightSide[i + 1];
    }
    var res = 0;
    for (var i = 0; i < N; i++) {
        if (A[i] === 0) {
            res += numberOfOneInRightSide[i];
        }
        if (res > 1000000000)
            return -1;
    }
    return res;
}