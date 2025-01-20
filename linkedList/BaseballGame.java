import java.util.ArrayDeque;
import java.util.Deque;

/**
 * 682. Baseball Game
 * 
 * ---------------------------
 * link: https://leetcode.com/problems/baseball-game/
 */

public class BaseballGame {

    // ---------------------------------------------------------------//
    // ------------------------1st trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description: store scores in stack due to dealing with last score most fo the
     * time
     * 
     * time : O(n).
     * space : O(n).
     */
    public int calPoints(String[] operations) {
        Deque<Integer> stack = new ArrayDeque<>();
        int sum = 0;
        int score;
        int prevScore;

        for (String op : operations) {

            if (op.equals("C")) {
                sum -= stack.pop();
            } else if (op.equals("D")) {
                score = stack.peek() * 2;
                stack.push(score);
                sum += score;
            } else if (op.equals("+")) {
                score = stack.pop();
                prevScore = stack.peek();
                stack.push(score);
                stack.push(score + prevScore);
                sum += score + prevScore;
            } else {
                score = Integer.parseInt(op);
                stack.push(score);
                sum += score;
            }
        }

        return sum;
    }

    public static void main(String[] args) {

        BaseballGame bg = new BaseballGame();

        System.out.println(bg.calPoints(new String[] { "5", "2", "C", "D", "+" }));
        System.out.println(bg.calPoints(new String[] { "5", "-2", "4", "C", "D", "9", "+", "+" }));
        System.out.println(bg.calPoints(new String[] { "1", "C" }));
    }
}
