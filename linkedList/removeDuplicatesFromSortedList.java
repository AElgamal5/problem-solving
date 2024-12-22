/**
 * 83. Remove Duplicates from Sorted List
 * 
 * ---------------------------
 * link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */
class Solution {
    // ---------------------------------------------------------------//
    // ------------------------1st trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     *
     * time : O(n) one traversal of the input linked list.
     * space : O(1);
     */
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }

        ListNode pointer = head;

        while (pointer != null && pointer.next != null) {
            if (pointer.val == pointer.next.val) {
                pointer.next = pointer.next.next;
            } else {
                pointer = pointer.next;
            }
        }

        return head;
    }
}