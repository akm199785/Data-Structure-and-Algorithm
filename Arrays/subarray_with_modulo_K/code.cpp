#include<bits/stdc++.h>
using namespace std;
int findMaxSum(int arr[],int N,int K)
{
	int sum=0,max_sum=0;
	unordered_map<int,int>mp;
	mp[0]=0;
	for(int i=0;i<N;i++)
	{
		sum+=arr[i];
		int mod_sum=(sum%K+K)%K;
		if(mp.find(mod_sum)!=mp.end())
		{
			max_sum=max(max_sum,mp[mod_sum]);
		}
		else
		mp[mod_sum]=sum;
	}
	return max_sum;
}
int countNumberOfSubarray(int arr[],int N,int K)
{
	int mod[K];
	memset(mod,0,sizeof(mod));
	int sum=0;
	for(int i=0;i<N;i++)
	{
		sum+=arr[i];
		int mod_sum=(sum%K+K)%K;
		mod[mod_sum]++;
	}
	int cnt=0;
	for(int i=1;i<K;i++)
	{
		if(mod[i]>0)
		cnt+=(mod[i]*(mod[i]-1))/2;
	}
	cnt+=mod[0];
	return cnt;
}
int main()
{
	int N,K;
	cin>>N>>K;
	int arr[N];
	for(int i=0;i<N;i++)
	cin>>arr[i];
	cout<<findMaxSum(arr,N,K)<<endl;
	cout<<countNumberOfSubarray(arr,N,K)<<endl;
}