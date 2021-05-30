#include <iostream>
#include<vector>
#include<algorithm>
using namespace std;
void dfs(vector<int> adj[],int node ,vector<bool> &vis,vector<int> &dp)
{
    vis[node]=true;
    for(int u : adj[node])
    {
        if(!vis[u])
        dfs(adj,u,vis,dp);
        dp[node]=max(dp[node],1+dp[u]);
    }
}
int longestPath(vector<int> adj[],int N)
{
    vector<int> dp(N+1,0);
    vector<bool> vis(N+1,false);
    for(int i=1;i<=N;i++)
    {
        if(!vis[i])
        dfs(adj,i,vis,dp);
    }
    int res=0;
    for(int i=1;i<=N;i++)
    {
        if(res<dp[i])
        res=dp[i];
    }
    return res;
}
int main() {
	int N,M;
	cin>>N>>M;
	vector<int> adj[N+1];
	int u,v;
	for(int i=0;i<M;i++)
	{
	    cin>>u>>v;
	    adj[u].push_back(v);
	}
	cout<<longestPath(adj,N)<<endl;
	return 0;
}