Submission Record
Hard
Lifting Weights
-C++
Accepted
100%
14.51MBmemory cost
·
832 mstime cost
·
Beats61.18 %Submissions
Runtime distribution graph
this submissionbeats 61.18%Submissions
100ms
200ms
300ms
400ms
500ms
600ms
700ms
800ms
0%
0.25%
0.5%
0.75%
1%
1.25%
Run Time 41ms
Beats 100.00% Submissions
Zoom area by dragging across this chart
500 ms
1000 ms
1500 ms
2000 ms
2500 ms
3000 ms
Code
由于题目优化过程中增加了数据或改变了题面描述, 排行榜中的代码有可能不适用于现在的题目
class Solution {
    map<pair<int,int>,int> mp;
public:
     void subSetSum(vector<int> &v,vector<int> &weights,int start,int n)
     {
         for(int i=0;i<(1<<n);i++)
         {
             int sum=0;
             for(int j=0;j<n;j++)
             if(i&(1<<j))
             sum+=weights[start+j];
             v.push_back(sum);
         }
     }
     int solve(vector<int> &weights,int N ,int maxCapacity)
     {
         if(N==0 || maxCapacity==0)
         return 0;
         if(mp.find({N,maxCapacity})!=mp.end())
         return mp[{N,maxCapacity}];
         if(maxCapacity>=weights[N-1])
         return mp[{N,maxCapacity}]=max(solve(weights,N-1,maxCapacity),weights[N-1]+solve(weights,N-1,maxCapacity-weights[N-1]));
         else
         return mp[{N,maxCapacity}]=solve(weights,N-1,maxCapacity);
     }
    int weightCapacity(vector<int> &weights, int maxCapacity) {
        // Write your code here
        mp.clear();
        return solve(weights, weights.size(),maxCapacity);

        /*
        //O(N*(2^(N/2)));

        vector<int> X,Y;
        subSetSum(X,weights,0,N/2);
        subSetSum(Y,weights,N/2,N-N/2);
        int X_size=(1<<(N/2));
        int Y_size=(1<<(N-N/2));
        sort(Y.begin(),Y.end());
        int res=0;
        for(int i=0;i<X_size;i++)
        {
            if(X[i]<=maxCapacity)
            {
                int p=lower_bound(Y.begin(),Y.end(),maxCapacity-X[i])-Y.begin();
                if(p==Y_size||Y[p]!=maxCapacity-X[i])
                p--;
                res=max(res,X[i]+Y[p]);
            }
        }
        return res;*/
    }
};