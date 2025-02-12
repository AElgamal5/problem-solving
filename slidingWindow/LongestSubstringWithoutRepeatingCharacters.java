import java.util.HashSet;

/**
 * 3. Longest Substring Without Repeating Characters
 * ---------------------------
 * link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

public class LongestSubstringWithoutRepeatingCharacters {

    /**
     * description: using sliding window technique, with fast and catch-up pointers
     * 
     * time : O(n).
     * space : O(n) or O(1) since the number of chars are constants.
     */
    public int lengthOfLongestSubstring(String s) {
        int length = s.length();

        if (length == 0 || length == 1) {
            return length;
        }

        int l = 0;
        int result = 0;
        HashSet<Character> hashSet = new HashSet<>();

        for (int r = 0; r < length; r++) {
            char c = s.charAt(r);

            while (hashSet.contains(c)) {
                hashSet.remove(s.charAt(l++));
            }

            hashSet.add(c);
            result = Math.max(result, r - l + 1);
        }

        return result;
    }

    public static void main(String[] args) {
        LongestSubstringWithoutRepeatingCharacters lswrc = new LongestSubstringWithoutRepeatingCharacters();

        System.out.println("abcabcbb" + " : " + lswrc.lengthOfLongestSubstring("abcabcbb"));
        System.out.println("bbbbb" + " : " + lswrc.lengthOfLongestSubstring("bbbbb"));
        System.out.println("pwwkew" + " : " + lswrc.lengthOfLongestSubstring("pwwkew"));
        System.out.println(" " + " : " + lswrc.lengthOfLongestSubstring(" "));
        System.out.println("empty" + " : " + lswrc.lengthOfLongestSubstring(""));
        System.out.println("au" + " : " + lswrc.lengthOfLongestSubstring("au"));
        System.out.println("vddf" + " : " + lswrc.lengthOfLongestSubstring("dvdf"));
        System.out.println("dvdf" + " : " + lswrc.lengthOfLongestSubstring("dvdf"));
        System.out.println("ckilbkd" + " : " + lswrc.lengthOfLongestSubstring("ckilbkd"));
    }
}