#include <iostream>
#include<vector>
#include <cstdio>
#include <iomanip>
#define MOD 1000000007
using namespace std;

double solve(vector<double> &p,int N)
{
    /*we will take 2d dp array where dp[i][j] represent the getting j heads from
    first ith coins
    so there will be two possibilities of getting j heads at ith position 
    1 => if number of head till (i-1) is equal to j then tails comes at ith
    2 => if number of head till (i-1) is equal to (j-1) then head should comes at ith
    
    dp[i][j]=dp[i-1][j]*(1-p[i])+dp[i-1][j-1]*p[i];
    if j==0 means zero head then there will only one possibilities
    which will be first condition
    that is  dp[i][j]=dp[i-1][j]*(1-p[i]);
    */
    vector<vector<double>>dp(N+1,vector<double>(N+1,0.0));
    dp[0][0]=1.0;
    // i -> number of coins
    for(int i=1;i<=N;i++)
    {
        for(int j=0;j<=N;j++)
        {
            if(j==0)
            dp[i][j]=dp[i-1][j]*(1.0-p[i-1]);
            else
            dp[i][j]=dp[i-1][j]*(1.0-p[i-1])+dp[i-1][j-1]*p[i-1];
        }
    }
    double res=0.0;
    for(int i=(N+1)/2;i<=N;i++)
    res+=dp[N][i];
    return res;
}
int main() {
    
	int N;
	cin>>N;
	vector<double> p(N);
	for(int i=0;i<N;i++)
	cin>>p[i];
	cout<<setprecision(10)<<fixed<<solve(p,N)<<endl;
	return 0;
}