
// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

/*
problem like following 

Job 1: (0, 6, 60)
Job 2: (1, 4, 30)
Job 3: (3, 5, 10)
Job 4: (5, 7, 30)
Job 5: (5, 9, 50)
Job 6: (7, 8, 10);
The maximum profit is 80, which is achieved by picking job 2 and Job 5.



*/

class Solution {
    private int lower_bound(int arr[][], int i, int val) {
        int low = 0, high = i - 1, mid = 0, res = -1;
        if (val <= arr[0][1])
            return -1;
        while (low <= high) {
            mid = low + (high - low) / 2;
            if ((val > arr[mid][1]) && (val <= arr[mid + 1][1])) {
                return mid;
            } else if (val >= arr[mid][1]) {
                low = mid + 1;
                if (val > arr[mid][1])
                    res = Math.max(res, mid);
            } else
                high = mid - 1;
        }

        return res;
    }

    public int solution(int[] A, int[] B) {
        // write your code in Java SE 11
        int N = A.length;
        if (N <= 1)
            return N;
        int arr[][] = new int[N][2];
        for (int i = 0; i < N; i++) {
            arr[i][0] = A[i];
            arr[i][1] = B[i];
        }
        Arrays.sort(arr, (int a[], int b[]) -> {
            return a[1] - b[1];
        });
        int res[] = new int[N];
        res[0] = 1;
        for (int i = 1; i < N; i++) {
            int li = lower_bound(arr, i, arr[i][0]);
            res[i] = res[i - 1];
            if (li != -1)
                res[i] = Math.max(res[i - 1], res[li] + 1);
        }
        return res[N - 1];
    }
}