package recursion_backtracing;

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);
        int N = scan.nextInt();
        int arr[] = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = scan.nextInt();
        }
        int tar = scan.nextInt();
        printTargetSumSubsets(arr, 0, "", N, tar);
    }

    // set is the subset
    // sos is sum of subset
    // tar is target
    public static void printTargetSumSubsets(int[] arr, int idx, String set, int N, int tar) {

        if (tar < 0)
            return;
        for (int i = idx; i < N; i++) {

            printTargetSumSubsets(arr, i + 1, set + Integer.toString(arr[i]) + ", ", N, tar - arr[i]);
        }

        if (tar == 0) {
            System.out.println(set + ".");
            return;

        }

    }

}