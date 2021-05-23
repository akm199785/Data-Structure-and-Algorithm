// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/*
A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, given and
The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].
means we have to  find maximum sum subarray missing with one element Y look at above statement
[X+1,X+2......Y-1+Y+1....Z-1]
means Y are missing and we cant start i==0 and cant end i==n-1 subarray we will use kadanes algo in this case
we can use a modified form of Kadane's algorithm that calculates the MAX Sum subarray ending at each index.

For each index, calculate the max_sum_ending_at[i] value by using Kadane's algorithm in forward direction.
For each index, calculate the max_sum_starting_from[i] value by using Kadane's algorithm in reverse direction.
Iterate these arrays simultaneously and choose the 'Y' that has the maximum value of

max_sum_ending_at[Y-1] + max_sum_starting_from[Y+1]


*/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var N = A.length;
    var maxSumEndingWithIthIndex = new Array(N).fill(0);
    var maxSumStartingWithIthIndex = new Array(N).fill(0);
    // maximum sum ending with ith index 
    for (var i = 1; i < N - 1; i++) {
        maxSumEndingWithIthIndex[i] = Math.max(0, maxSumEndingWithIthIndex[i - 1] + A[i]);

    }
    //console.log(maxPrefixSum);
    // maximum sum starting with ith index 
    for (var i = N - 2; i > 0; i--) {
        maxSumStartingWithIthIndex[i] = Math.max(0, maxSumStartingWithIthIndex[i + 1] + A[i]);
    }
    var res = -1000000000;
    for (var i = 1; i < N - 1; i++) {


        // maximum sum subarray which exclude A[i] element 
        var sum = maxSumEndingWithIthIndex[i - 1] + maxSumStartingWithIthIndex[i + 1];

        res = Math.max(res, sum);
    }
    //console.log(maxSuffixSum);
    return res;
}