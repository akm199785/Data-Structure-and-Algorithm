// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = S.length;
    let res = -1;
    let str = S.split(" ");
    for (let st of str) {
        let countLetter = 0, countDigit = 0;
        for (let i = 0; i < st.length; i++) {
            if ((st.charAt(i) >= 'a' && st.charAt(i) <= 'z') || (st.charAt(i) >= 'A' && st.charAt(i) <= 'Z')) {
                countLetter++;
            }
            else if ((st.charAt(i) >= '0' && st.charAt(i) <= '9')) {
                countDigit++;
            }
            else {
                countDigit = 0;
                countLetter = 0;
                break;
            }
        }
        if ((countDigit !== 0 || countLetter !== 0) && (countLetter % 2 === 0) && (countDigit % 2 === 1)) {
            res = Math.max(res, countDigit + countLetter);
        }
    }
    return res;
}