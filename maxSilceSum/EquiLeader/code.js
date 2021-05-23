
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxEle = A[0], cnt = 0, N = A.length;
    // Moore algo
    for (let x of A) {
        if (maxEle === x)
            cnt++;
        else
            cnt--;
        if (cnt == 0) {
            cnt = 1;
            maxEle = x;
        }
    }
    let arr = new Array(N).fill(0);
    // console.log(maxEle);
    for (let i = 0; i < N; i++) {
        if (A[i] === maxEle)
            arr[i]++;
    }
    for (let i = 1; i < N; i++)
        arr[i] += arr[i - 1];
    let res = 0, total = arr[N - 1];
    for (let i = 0; i < N; i++) {
        let right = total - arr[i];
        if ((arr[i] > (i + 1) / 2) && (right > (N - (i + 1)) / 2))
            res++;
    }
    return res;
}