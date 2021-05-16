#include <iostream>
#define INT_MAX 2147483647
using namespace std;
int abs(int a)
{
    return a >= 0 ? a : -a;
}
int min(int a, int b)
{
    return a <= b ? a : b;
}
int max(int a, int b)
{
    return a < b ? b : a;
}
int solve(int arr[], int N, int K)
{
    if (N == 2)
        return abs(arr[0] - arr[1]);
    int dp[N];
    dp[0] = 0;
    for (int i = 1; i < N; i++)
    {
        dp[i] = INT_MAX;
        for (int j = i - 1; j >= max(0, i - K); j--)
        {
            dp[i] = min(dp[i], abs(arr[i] - arr[j]) + dp[j]);
        }
    }
    return dp[N - 1];
}
int main()
{
    int N, K;
    cin >> N >> K;
    int arr[N];
    for (int i = 0; i < N; i++)
        cin >> arr[i];
    cout << solve(arr, N, K);
}