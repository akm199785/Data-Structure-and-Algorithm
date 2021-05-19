// you can also use imports, for example:
// import java.util.*;
/*
In this problem we need to some observation that makes easy for maxCount operation
Initially Counter Array will be set to 0 but in first operation we need to increament count at
corresponding index so in this opearation every time once we increament we will keep maintain max value
among all counter value so that we can utilise this value in second operation 
and there might be some position of counter index where value is less than initial_value so we 
assign them with initial_value
in second operation we will not traverse entire Counter Array to set with max value instead of this we
will keep update our initialiser_value with max_value for which we will check at last
*/

class Solution {
    public int[] solution(int N, int[] A) {
        // write your code in Java SE 8
        int M = A.length;
        int res[] = new int[N];
        int initialiser_value = 0, max_val = 0;
        for (int k = 0; k < M; k++) {
            int x = A[k];
            if (x >= 1 && x <= N) {
                res[x - 1] = res[x - 1] < initialiser_value ? initialiser_value + 1 : res[x - 1] + 1;
                if (max_val < res[x - 1])
                    max_val = res[x - 1];
            } else
                initialiser_value = max_val;

        }
        for (int i = 0; i < N; i++) {
            if (res[i] < initialiser_value)
                res[i] = initialiser_value;
        }
        return res;

    }
}