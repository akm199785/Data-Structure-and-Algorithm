class Solution {
    public int solution(int[] A, int[] B) {
        // write your code in Java SE 8
        int N=A.length;
        Stack<Integer> upStream=new Stack<>();
        Stack<Integer> downStream=new Stack<>();
        for(int i=0;i<N;i++)
        {
            if(B[i]==0)
            {
              while(!downStream.empty() && downStream.peek()<=A[i])
              downStream.pop();
              if(downStream.empty())
              {
                  upStream.push(A[i]);
              }
              
            }
            else
            {
               downStream.push(A[i]);
            }
        }
        return upStream.size()+downStream.size();
    }
}