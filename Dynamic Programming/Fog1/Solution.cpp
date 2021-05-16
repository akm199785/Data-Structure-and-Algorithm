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
int solve(int arr[], int N)
{
    if (N == 2)
        return abs(arr[0] - arr[1]);
    int dp[N];
    dp[0] = 0;
    for (int i = 1; i < N; i++)
    {
        dp[i] = min(dp[i - 1] + abs(arr[i] - arr[i - 1]), (i - 2 >= 0 ? dp[i - 2] + abs(arr[i] - arr[i - 2]) : INT_MAX));
    }
    return dp[N - 1];
}
int main()
{
    int N;
    cin >> N;
    int arr[N];
    for (int i = 0; i < N; i++)
        cin >> arr[i];
    cout << solve(arr, N);
}