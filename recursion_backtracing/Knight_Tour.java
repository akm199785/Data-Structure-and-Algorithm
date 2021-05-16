package recursion_backtracing;

import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int r = sc.nextInt();
        int c = sc.nextInt();
        int chess[][] = new int[n][n];
        printKnightsTour(chess, r, c, 1);
    }

    public static void printKnightsTour(int[][] chess, int r, int c, int upcomingMove) {
        chess[r][c] = upcomingMove;
        int N = chess.length;
        if (upcomingMove == N * N) {

            displayBoard(chess);
            chess[r][c] = 0;
            return;
        }
        if (r - 2 >= 0 && c + 1 < N && chess[r - 2][c + 1] == 0) {
            printKnightsTour(chess, r - 2, c + 1, upcomingMove + 1);

        }
        if (r - 1 >= 0 && c + 2 < N && chess[r - 1][c + 2] == 0) {
            printKnightsTour(chess, r - 1, c + 2, upcomingMove + 1);

        }
        if (r + 1 < N && c + 2 < N && chess[r + 1][c + 2] == 0) {
            printKnightsTour(chess, r + 1, c + 2, upcomingMove + 1);

        }
        if (r + 2 < N && c + 1 < N && chess[r + 2][c + 1] == 0) {
            printKnightsTour(chess, r + 2, c + 1, upcomingMove + 1);

        }
        if (r + 2 < N && c - 1 >= 0 && chess[r + 2][c - 1] == 0) {
            printKnightsTour(chess, r + 2, c - 1, upcomingMove + 1);

        }
        if (r + 1 < N && c - 2 >= 0 && chess[r + 1][c - 2] == 0) {
            printKnightsTour(chess, r + 1, c - 2, upcomingMove + 1);

        }
        if (r - 1 >= 0 && c - 2 >= 0 && chess[r - 1][c - 2] == 0) {
            printKnightsTour(chess, r - 1, c - 2, upcomingMove + 1);

        }
        if (r - 2 >= 0 && c - 1 >= 0 && chess[r - 2][c - 1] == 0) {
            printKnightsTour(chess, r - 2, c - 1, upcomingMove + 1);

        }
        chess[r][c] = 0;
    }

    public static void displayBoard(int[][] chess) {
        for (int i = 0; i < chess.length; i++) {
            for (int j = 0; j < chess[0].length; j++) {
                System.out.print(chess[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println();
    }
}