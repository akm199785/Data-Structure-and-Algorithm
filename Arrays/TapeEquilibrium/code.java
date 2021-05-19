// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        int N=A.length;
        int Total_sum=0;
        //first find Total sum so that at every index p we can calculate
        // right subarray(Suffix_sum)=Total_sum-(prefix_sum from 0 to p-1 index)
        for(int x:A)
        Total_sum+=x;
        int prefix_Sum=A[0],res=Integer.MAX_VALUE;
        for(int p=1;p<N;p++)
        {
            int suffix_Sum=Total_sum-prefix_Sum;
            res=Math.min(res,Math.abs(prefix_Sum-suffix_Sum));
            prefix_Sum+=A[p];
        }
        return res;

    }
}