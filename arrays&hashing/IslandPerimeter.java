/**
 * 463. Island Perimeter
 * ---------------------------
 * link: https://leetcode.com/problems/island-perimeter/
 */

class IslandPerimeter {
    // ---------------------------------------------------------------//
    // ------------------------1st trial------------------------------//
    // ---------------------------------------------------------------//

    /**
     * description: loop over the matrix and count outer edges of
     *
     * time : O(n * m)
     * space : O(1)
     */
    public static int islandPerimeter(int[][] grid) {
        int perimeter = 0;
        int n = grid.length;
        int m = grid[0].length;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] != 1)
                    continue;

                perimeter += 4;
                if (i > 0 && grid[i - 1][j] == 1)
                    perimeter--;
                if (j > 0 && grid[i][j - 1] == 1)
                    perimeter--;
                if (i < n - 1 && grid[i + 1][j] == 1)
                    perimeter--;
                if (j < m - 1 && grid[i][j + 1] == 1)
                    perimeter--;
            }
        }

        return perimeter;
    }

    public static void main(String[] args) {

        int[][] grid = { { 0, 1, 0, 0 },
                { 1, 1, 1, 0 },
                { 0, 1, 0, 0 },
                { 1, 1, 0, 0 } };
        System.out.println(islandPerimeter(grid)); // 16
        System.out.println("-".repeat(20));

        int[][] grid2 = { { 1 } };
        System.out.println(islandPerimeter(grid2)); // 4
        System.out.println("-".repeat(20));

        int[][] grid3 = { { 0 } };
        System.out.println(islandPerimeter(grid3)); // 0
    }
}