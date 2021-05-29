// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function merge(A, low, mid, high) {
    let N1 = mid - low + 1, N2 = high - mid;
    let left = [];
    let right = [];
    for (let i = 0; i < N1; i++)
        left.push(A[low + i]);
    for (let j = 0; j < N2; j++)
        right.push(A[mid + j + 1]);
    let i = 0, j = 0, k = low, cnt = 0;
    while (i < N1 && j < N2) {
        if (left[i] <= right[j]) {
            A[k++] = left[i++];
        }
        else {
            cnt += (N1 - i);
            A[k++] = right[j++];
        }
    }
    while (i < N1) {
        A[k++] = left[i++];
    }
    while (j < N2) {
        A[k++] = right[j++];
    }
    return cnt;

}
function inversionCount(A, low, high) {
    let count = 0, mid = 0;
    if (low < high) {
        mid = Math.floor(low + (high - low) / 2);
        count += inversionCount(A, low, mid);
        count += inversionCount(A, mid + 1, high);
        count += merge(A, low, mid, high);
    }
    return count;
}
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    if (N <= 1)
        return 0;
    let res = inversionCount(A, 0, N - 1);
    return res <= 1000000000 ? res : -1;
}