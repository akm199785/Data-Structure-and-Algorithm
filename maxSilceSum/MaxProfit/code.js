function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    let buy = A[0], sell = [0], maxProfit = 0;
    for (let stock of A) {
        if (stock > buy) {
            sell = stock;
        }
        else {

            buy = stock;
            sell = stock;
        }
        if (maxProfit < (sell - buy))
            maxProfit = sell - buy;
    }
    if (maxProfit < (sell - buy))
        maxProfit = sell - buy;
    return maxProfit;
}