
// you can also use imports, for example:
import java.util.*;

/*
Basically in this problem we have keep track of minimum time of leaf fall to position (1......X)
means time taken to fall leaf at position x at first time beacause there might be more than one leaf can
fall at same position at different time so
first we make any array of size X+1 to keep track of time means first leaf that fell at certain position 
from 1 to X
and finally we will find maximum time among all of position but if any position have,nt covered by leaf then
not possible to reach just return -1 otherwise return max time  
*/

class Solution {
    public int solution(int X, int[] A) {
        // write your code in Java SE 8
        int N = A.length;
        int leafArray[] = new int[X + 1];
        Arrays.fill(leafArray, Integer.MAX_VALUE);
        for (int i = 0; i < N; i++) {
            leafArray[A[i]] = Math.min(leafArray[A[i]], i);
        }
        int res = -1;
        for (int i = 1; i <= X; i++) {
            if (leafArray[i] == Integer.MAX_VALUE)
                return -1;
            res = Math.max(res, leafArray[i]);
        }
        return res;
    }
}