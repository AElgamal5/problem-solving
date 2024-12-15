/**
 * 876. Middle of the Linked List
 * 
 * ---------------------------
 * link: https://leetcode.com/problems/middle-of-the-linked-list
 */
class Solution {
    // ---------------------------------------------------------------//
    // ------------------------1st trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description: fast moves 2 times slow so when fast arrive end the slow will be
     * at the mid.
     *
     * time : O(n) one traversal of the input linked list.
     * space : O(1);
     */
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}