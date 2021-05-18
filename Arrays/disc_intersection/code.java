
//  Logic
/*
The for loop iterates through the positions on the line.

At iteration i, the "active" discs (call these the set Ai) are 
those discs who have started (that is, their left boundary is to the left of i) 
but not ended (that is, their right boundary is on or to the right of i).

The number startArr[i] describes the number of discs which are 
activated at position i (meaning their left boundary is on position i;
 call these the set Bi).

It's clear that each of these discs in both sets mutually intersect. 
We know we have already counted the intersections of Ai with itself. 
However, we do need to count the intersections of Ai with Bi: 
this is the number active * startArr[i]. We also need to count the intersections 
of Bi with itself: this is the number startArr[i] * (startArr[i] - 1) / 2 since n∗(n−1)/2 
is the number of ways to pick two things from a set of size n.

Finally, after adding these intersections, it updates the number of active discs.
 Indeed, the number of active discs is precisely the old number plus the ones
 which started at position i and minus the ones that ended at position i.*/


 // you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");
*/
class Solution {
    public int solution(int[] A) {
       // write your code in Java SE 8
       int N=A.length;
       if(N==0)
       return 0;
       int sum=0;
       int start[]=new int[N];
       int end[]=new int[N];
       // sort start and end boundaries of the discs into their own arrays
       for(int i=0;i<N;i++)
       {
           if(A[i]>i)
           start[0]++;
           else
           start[i-A[i]]++;
           
           if(((long)i+(long)A[i]) >= (long)N)
           end[N-1]++;
           else
           end[i+A[i]]++;
           
       }
       int active=0;
       for(int i=0;i<N;i++)
       {
           sum+=active*start[i]+(start[i]*(start[i]-1))/2;
            // over 10 000 000 return -1 as stated in the assignment
           if(sum>10000000)
           return -1;
           active+=start[i]-end[i];
       }
       return sum;
   }
}