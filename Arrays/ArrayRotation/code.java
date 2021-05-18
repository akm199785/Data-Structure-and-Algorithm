/ you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
   private int gcd(int a,int b)
     {
    if(b==0)
    return a;
    return gcd(b,a%b);
    }
    public int[] solution(int[] A, int K) {
        int N=A.length;
        if(N==0)
        return A;
        K=K%N;
        int d=gcd(N,K);
        for(int i=0;i<d;i++)
         {
            int temp=A[i];
            int j=i;
              while(true)
              {
                  int k=(j-K+N)%N;
                     if(k==i)
                     break;
                  A[j]=A[k];
                   j=k;
              }
            A[j]=temp;
       } 
       return A;
    }
}