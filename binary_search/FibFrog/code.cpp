// you can use includes, for example:
#include < algorithm >
#include "bits/stdc++.h"
using namespace std;
// you can write to stdout for debugging purposes, e.g.
// cout << "this is a debug message" << endl;

int solution(vector < int > & A) {
    // write your code in C++14 (g++ 6.2.0)
    int N = A.size();
    if (N == 0)
        return 1;
    vector < int > fib;
    int x = 0, y = 1, z = 0;
    while (true) {
        z = x + y;
        if (z > N + 2)
            break;
        fib.push_back(z);
        x = y;
        y = z;
    }
    queue < pair < int, int >> q;
    q.push({- 1, 0});
vector < bool > vis(N + 1, false);
while (q.empty() == false) {
    auto curr = q.front();
    q.pop();
    if (curr.first == N)
        return curr.second;
    for (int x : fib)
    {
        if (curr.first + x > N)
            break;
        if ((curr.first + x <= N && curr.first + x >= 0 && !vis[curr.first + x]) && (curr.first + x == N || A[curr.first + x] == 1)) {
            vis[curr.first + x] = true;
            q.push({ curr.first + x, curr.second + 1 });
        }
    }
}
return -1;
}