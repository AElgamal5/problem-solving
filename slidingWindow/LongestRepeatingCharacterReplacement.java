import java.util.HashMap;

/**
 * 424. Longest Repeating Character Replacement
 * ---------------------------
 * link:
 * https://leetcode.com/problems/longest-repeating-character-replacement/description/
 */

public class LongestRepeatingCharacterReplacement {

    /**
     * description: https://youtu.be/gqXU1UyA8pk
     * 
     * time : O(n)
     * space : O(n)
     */
    public int characterReplacement(String s, int k) {
        int length = s.length();

        if (length == 0 || length == 1 || length <= k) {
            return length;
        }

        HashMap<Character, Integer> count = new HashMap<>();
        int result = k + 1;
        int l = 0;
        int max = 0;

        for (int r = 0; r < length; r++) {
            char currentChar = s.charAt(r);

            count.put(currentChar, count.getOrDefault(currentChar, 0) + 1);
            max = Math.max(max, count.get(s.charAt(r)));

            if ((r - l + 1) - max > k) {
                count.put(s.charAt(l), count.get(s.charAt(l)) - 1);
                l++;
            }

            result = Math.max(result, r - l + 1);
        }

        return result;
    }

    public static void main(String[] args) {
        LongestRepeatingCharacterReplacement obj = new LongestRepeatingCharacterReplacement();

        // System.out.println("ABAB: " + obj.characterReplacement("ABAB", 2));
        // System.out.println("XYYX: " + obj.characterReplacement("XYYX", 2));
        System.out.println("AABABBA: " + obj.characterReplacement("AABABBA", 1));
    }
}