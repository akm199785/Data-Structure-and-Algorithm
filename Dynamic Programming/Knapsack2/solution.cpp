/*
there is bit difference because we can,t create
dp array of size 10^9 so in standared knapsack
what we did that we had initialise of dp array of
N*W size in that case N<=100 && W<=10^5
and dp[N][W] was storing maximum value obtained
by selecting N item having weight <= W
but in this question if we look at given constaints
then N<=100 && val<=10^3;
so if we make dp array of N*value <=100*(10^3)==10^5
in this case dp[N][Value] will store minimum weight required
to get Value among N items by selecting 1,2,or N item

*/

#include <iostream>
#define INT_MAX 2147483647
using namespace std;

long min(long a, long b)
{
    return a > b ? b : a;
}
long solve(long wt[], long val[], long N, long Wt)
{
    long total = 0;
    for (int i = 0; i < N; i++)
    {
        total += val[i];
    }
    long dp[N + 1][total + 1];
    for (int i = 0; i < N; i++)
        dp[i][0] = 0;
    for (int i = 1; i < total + 1; i++)
        dp[0][i] = INT_MAX;
    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= total; j++)
        {
            if (j >= val[i - 1] && dp[i - 1][j - val[i - 1]] != INT_MAX)
                dp[i][j] = min(dp[i - 1][j - val[i - 1]] + wt[i - 1], dp[i - 1][j]);
            else
                dp[i][j] = dp[i - 1][j];
        }
    }
    long res = 0;
    for (int i = 1; i <= total; i++)
    {
        if (dp[N][i] != INT_MAX && Wt >= dp[N][i])
        {
            if (res < i)
                res = i;
        }
    }
    return res;
}
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    long N, Wt;
    cin >> N >> Wt;
    long wt[N], val[N];
    for (int i = 0; i < N; i++)
        cin >> wt[i] >> val[i];
    cout << solve(wt, val, N, Wt);
}