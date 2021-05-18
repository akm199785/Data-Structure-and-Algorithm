
import java.util.*;

class Solution {
    public int solution(int N) {
        // write your code in Java SE 8
        if (N <= 2)
            return 0;
        int leftPositionOfSetBit = -1, currPosition = 0, res = 0;
        while (N != 0) {
            int bit = N % 2;
            N = N / 2;
            if (bit == 1) {
                if (leftPositionOfSetBit == -1) {
                    leftPositionOfSetBit = currPosition;
                } else {
                    res = Math.max(res, currPosition - leftPositionOfSetBit - 1);
                    leftPositionOfSetBit = currPosition;
                }
                // System.out.print(currPosition+" ");
            }
            currPosition++;

        }
        return res;

    }
}