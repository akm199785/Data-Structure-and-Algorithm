// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A, int[] B) {
        // write your code in Java SE 8
        int pre = -1, ans = 0;
        for (int i = 0; i < A.length; i++) {
            if ((pre < 0) || (A[i] > B[pre])) {
                pre = i;
                ans++;
            }

        }
        return ans;
    }
}