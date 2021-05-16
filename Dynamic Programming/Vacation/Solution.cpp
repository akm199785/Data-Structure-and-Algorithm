#include <iostream>
using namespace std;
int max(int a, int b)
{
    return a > b ? a : b;
}
int solve(int arr[][3], int N)
{
    int dp[N][3];
    dp[0][0] = arr[0][0];
    dp[0][1] = arr[0][1];
    dp[0][2] = arr[0][2];
    for (int i = 1; i < N; i++)
    {
        dp[i][0] = max(dp[i - 1][1] + arr[i][0], dp[i - 1][2] + arr[i][0]);
        dp[i][1] = max(dp[i - 1][0] + arr[i][1], dp[i - 1][2] + arr[i][1]);
        dp[i][2] = max(dp[i - 1][0] + arr[i][2], dp[i - 1][1] + arr[i][2]);
    }
    return max(dp[N - 1][0], max(dp[N - 1][1], dp[N - 1][2]));
}
int main()
{
    int N;
    cin >> N;
    int arr[N][3];
    for (int i = 0; i < N; i++)
    {
        cin >> arr[i][0] >> arr[i][1] >> arr[i][2];
    }
    cout << solve(arr, N);
}