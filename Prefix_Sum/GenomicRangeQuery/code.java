
// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int[] solution(String S, int[] P, int[] Q) {
        // write your code in Java SE 8
        int N = S.length();
        int prefixSum[][] = new int[4][N];
        for (int j = 0; j < N; j++) {
            if (S.charAt(j) == 'A')
                prefixSum[0][j]++;
            else if (S.charAt(j) == 'C')
                prefixSum[1][j]++;
            else if (S.charAt(j) == 'G')
                prefixSum[2][j]++;
            else
                prefixSum[3][j]++;
        }
        for (int j = 1; j < N; j++) {
            for (int i = 0; i < 4; i++)
                prefixSum[i][j] += prefixSum[i][j - 1];
        }
        int M = P.length;
        int res[] = new int[M];
        for (int j = 0; j < M; j++) {
            for (int i = 0; i < 4; i++) {
                int val = prefixSum[i][Q[j]];
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
}