// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int K, int[] A) {
        // write your code in Java SE 8
        int cnt = 0, sum = 0;
        for (int x : A) {
            if (x >= K) {
                sum = 0;
                cnt++;
            } else {
                sum += x;
                if (sum >= K) {
                    sum = 0;
                    cnt++;
                }
            }
        }
        return cnt;
    }
}