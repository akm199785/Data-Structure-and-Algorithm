#include <iostream>
#include<vector>
#define MOD 1000000007
using namespace std;
int Path(vector<vector<char>> &grid,int N,int M)
{
    vector<vector<int>> dp(N,vector<int>(M,0));
    for(int i=1;i<M;i++)
    {
        if(grid[0][i]=='#')
        break;
        dp[0][i]=1;
    }
     for(int i=1;i<N;i++)
    {
        if(grid[i][0]=='#')
        break;
        dp[i][0]=1;
    }
    for(int i=1;i<N;i++)
    {
        for(int j=1;j<M;j++)
        {
            if(grid[i][j]=='#')
            continue;
            dp[i][j]=(dp[i-1][j]%MOD+dp[i][j-1]%MOD)%MOD;
        }
    }
    return dp[N-1][M-1];
    
}
int main() {
	int N,M;
	cin>>N>>M;
	vector<vector<char>> grid(N,vector<char>(M));
	for(int i=0;i<N;i++)
	{
	    for(int j=0;j<M;j++)
	    cin>>grid[i][j];
	}
	cout<<Path(grid,N,M)<<endl;
	return 0;
}