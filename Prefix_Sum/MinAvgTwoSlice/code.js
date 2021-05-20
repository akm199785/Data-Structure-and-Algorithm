function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var N = A.length;
    var minAvgSliceTwo = (A[0] + A[1]) / 2;
    var minIndexOfSliceTwo = 0;
    if (N === 2)
        return 0;
    var minAvgSliceThree = (A[0] + A[1] + A[2]) / 3;
    var minIndexOfSliceThree = 0;
    for (var i = 2; i < N; i++) {
        var sliceTwo = A[i] + A[i - 1];
        if (minAvgSliceTwo > (sliceTwo / 2)) {
            minAvgSliceTwo = sliceTwo / 2;
            minIndexOfSliceTwo = i - 1;
        }
        var sliceThree = sliceTwo + A[i - 2];
        if (minAvgSliceThree > (sliceThree / 3)) {
            minAvgSliceThree = sliceThree / 3;
            minIndexOfSliceThree = i - 2;
        }
    }
    if (minAvgSliceThree === minAvgSliceTwo)
        return minIndexOfSliceThree < minIndexOfSliceTwo ? minIndexOfSliceThree : minIndexOfSliceTwo;
    return minAvgSliceTwo < minAvgSliceThree ? minIndexOfSliceTwo : minIndexOfSliceThree;
}