/**
 * 203. Remove Linked List Elements
 * 
 * ---------------------------
 * link: https://leetcode.com/problems/remove-linked-list-elements/
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
    public ListNode removeElements1(ListNode head, int val) {
        while (head != null && head.val == val) {
            head = head.next;
        }

        if (head == null)
            return null;

        ListNode current = head;
        ListNode previous = null;

        while (current != null) {

            if (current.val != val) {

                if (previous == null) {
                    previous = current;
                } else {
                    ListNode temp = previous;
                    previous = current;
                    temp.next = previous;
                }
            }

            current = current.next;
        }

        if (previous != null) {
            previous.next = null;
            return head;
        }

        return null;
    }

    // ---------------------------------------------------------------//
    // ------------------------2nd trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description: more optimized code
     * time : O(n) one traversal of the input linked list.
     * space : O(1);
     */
    public ListNode removeElements(ListNode head, int val) {
        while (head != null && head.val == val) {
            head = head.next;
        }

        if (head == null) {
            return null;
        }

        ListNode current = head;

        while (current.next != null) {
            if (current.next.val == val) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        return head;
    }

}