Submission Record
Hard
Lifting Weights
-Java
Accepted
100%
238.23MBmemory cost
·
832 mstime cost
·
Beats13.48 %Submissions
Runtime distribution graph
this submissionbeats 13.48%Submissions
200ms
300ms
400ms
500ms
600ms
700ms
800ms
0%
0.12%
0.24%
0.36%
0.48%
0.6%
Run Time 143ms
Beats 100.00% Submissions
Zoom area by dragging across this chart
500 ms
1000 ms
1500 ms
2000 ms
2500 ms
3000 ms
Code
由于题目优化过程中增加了数据或改变了题面描述, 排行榜中的代码有可能不适用于现在的题目
public class Solution {
    /**
     * @param weights: An array of n integers, where the value of each element weights[i] is the weight of each plate i
     * @param maxCapacity: An integer, the capacity of the barbell
     * @return: an integer denoting the maximum capacity of items that she can lift.
     */
    public int weightCapacity(int[] weights, int maxCapacity) {
        // Write your code here
         int N=weights.length;
        int dp[][]=new int[N+1][maxCapacity+1];
        for(int i=1;i<=N;i++)
        {
            for(int j=1;j<=maxCapacity;j++)
            {
                if(j>=weights[i-1])
                dp[i][j]=Math.max(dp[i-1][j],weights[i-1]+dp[i-1][j-weights[i-1]]);
                else
                dp[i][j]=dp[i-1][j];
            }
        }
        return dp[N][maxCapacity];
        
    }
}