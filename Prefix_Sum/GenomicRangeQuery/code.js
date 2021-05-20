// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)

    var N = S.length;
    var prefixSum = new Array(4).fill(0).map(() => new Array(N).fill(0));
    for (var j = 0; j < N; j++) {
        if (S.charAt(j) === 'A')
            prefixSum[0][j]++;
        else if (S.charAt(j) === 'C')
            prefixSum[1][j]++;
        else if (S.charAt(j) === 'G')
            prefixSum[2][j]++;
        else
            prefixSum[3][j]++;
    }
    for (var j = 1; j < N; j++) {
        for (var i = 0; i < 4; i++)
            prefixSum[i][j] += prefixSum[i][j - 1];
    }
    var M = P.length;
    var res = new Array(M).fill(0);

    for (var j = 0; j < M; j++) {
        for (var i = 0; i < 4; i++) {
            var val = prefixSum[i][Q[j]];
            if (P[j] > 0)
                val = val - prefixSum[i][P[j] - 1];
            if (val > 0) {
                res[j] = i + 1;
                break;
            }
        }
    }
    return res;
}