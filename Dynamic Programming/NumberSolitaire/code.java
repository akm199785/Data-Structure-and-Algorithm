// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        int N = A.length;
        int res[] = new int[N];
        res[0] = A[0];
        for (int i = 1; i < N; i++) {
            int j = i - 1, index = Math.max(0, i - 6);
            res[i] = Integer.MIN_VALUE;
            while (j >= index) {
                res[i] = Math.max(res[i], res[j] + A[i]);
                j--;
            }
        }

        return res[N - 1];
    }
}