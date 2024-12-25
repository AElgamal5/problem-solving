/**
 * 1290. Convert Binary Number in a Linked List to Integer
 * 
 * ---------------------------
 * link:
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 */
class Solution {

    // ---------------------------------------------------------------//
    // ------------------------1st trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description: binary base = 2.
     * 
     * time : O(n).
     * space : O(1).
     */
    public int getDecimalValue(ListNode head) {
        int result = 0;
        ListNode pointer = head;

        while (pointer != null) {
            result *= 2;
            result += pointer.data;

            pointer = pointer.next;
        }

        return result;
    }

}