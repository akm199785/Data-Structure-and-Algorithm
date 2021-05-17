#include <iostream>

using namespace std;
long dp[101][100001];
long max(long a, long b)
{
    return a > b ? a : b;
}
long solve(int arr[][2], int N, int Wt)
{
    if (N == 0 || Wt == 0)
        return 0;
    if (dp[N][Wt] != -1)
        return dp[N][Wt];
    if (Wt >= arr[N - 1][0])
        return dp[N][Wt] = max(solve(arr, N - 1, Wt), arr[N - 1][1] + solve(arr, N - 1, Wt - arr[N - 1][0]));
    else
        return dp[N][Wt] = solve(arr, N - 1, Wt);
}
int main()
{
    int N, Wt;
    cin >> N >> Wt;
    int arr[N][2];
    for (int i = 0; i < N; i++)
        cin >> arr[i][0] >> arr[i][1];
    for (int i = 0; i < 101; i++)
    {
        for (int j = 0; j < 100001; j++)
            dp[i][j] = -1;
    }
    cout << solve(arr, N, Wt);
}