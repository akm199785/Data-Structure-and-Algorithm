
// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

/*
Notice that the range of numbers is quite small (maximum 100). 
Hence, there must be a lot of duplicated numbers. Let count[i] 
denote the number of occurrences of the value i. We can process all occurrences of the same 
value at once. First we calculate values count[i] Then we create array dp such that:

dp[j] = −1 if we cannot get the sum j,
dp[j] >= ­ 0 if we can get sum j.
Initially, dp[j] = -1 for all of j (except dp[0] = 0). Then we scan through all the values a 
appearing in A; we consider all a such that count[a]>0. For every such a we update dp that dp[j] 
denotes how many values a remain (maximally) after achieving sum j. Note that if the previous value at 
dp[j] >= 0 then we can set dp[j] = count[a] as no value a is needed to obtain the sum j. Otherwise 
we must obtain sum j-a first and then use a number a to get sum j. In such a situation dp[j] = dp[j-a]-1.
 Using this algorithm, we can mark all the sum values and choose the best one (closest to half of S, 
 the sum of abs of A).
(note that since the final iteration only considers sums up until S // 2 + 1, we can save some space and time by only 
creating a DP Cache up until that value as well)
*/

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        int N = A.length;
        if (N == 0)
            return 0;
        if (N == 1)
            return A[0];
        int sum = 0, M = A[0];
        for (int i = 0; i < N; i++) {
            A[i] = Math.abs((A[i]));
            if (M < A[i])
                M = A[i];
            sum += A[i];
        }
        int count[] = new int[M + 1];
        int S = sum / 2 + 2;
        int dp[] = new int[S];
        for (int x : A)
            count[x]++;
        Arrays.fill(dp, -1);
        dp[0] = 0;
        for (int i = 1; i <= M; i++) {
            if (count[i] > 0) {
                for (int j = 0; j < S; j++) {
                    if (dp[j] >= 0)
                        dp[j] = count[i];
                    else if (j >= i && dp[j - i] > 0)
                        dp[j] = dp[j - i] - 1;
                }
            }
        }
        int res = Integer.MAX_VALUE;
        for (int i = 0; i < S; i++) {
            if (dp[i] >= 0) {
                res = Math.min(res, Math.abs(sum - 2 * i));
            }
        }
        return res;
    }
}