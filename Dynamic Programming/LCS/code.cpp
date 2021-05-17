#include <iostream>
#define INT_MAX 2147483647
using namespace std;
int max(int a, int b)
{
    return a > b ? a : b;
}
string solve(string str1, string str2, int N, int M)
{
    int dp[N + 1][M + 1];
    for (int i = 0; i <= N; i++)
    {
        for (int j = 0; j <= M; j++)
            dp[i][j] = 0;
    }
    for (int i = 1; i <= N; i++)
    {
        for (int j = 1; j <= M; j++)
        {
            if (str1[i - 1] == str2[j - 1])
                dp[i][j] = 1 + dp[i - 1][j - 1];
            else
                dp[i][j] = max(dp[i][j - 1], dp[i - 1][j]);
        }
    }

    string res = "";
    int i = N, j = M;
    while (i > 0 && j > 0)
    {
        if (str1[i - 1] == str2[j - 1])
        {
            res = str1[i - 1] + res;
            i--;
            j--;
        }
        else if (dp[i - 1][j] > dp[i][j - 1])
        {
            i--;
        }
        else
        {
            j--;
        }
    }
    return res;
}
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    string str1, str2;
    cin >> str1 >> str2;

    cout << solve(str1, str2, str1.size(), str2.size());
}
