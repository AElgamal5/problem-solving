/**
 * 206. Reverse Linked List
 * ---------------------------
 * link: https://leetcode.com/problems/reverse-linked-list
 */
class Solution {

    // ---------------------------------------------------------------//
    // ------------------------1st trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description: create a new linked list in the opposite direction.
     *
     * time : O(n) one traversal of the input list.
     * space : O(n) additional space for the new linked list.
     */
    public ListNode reverseList1(ListNode head) {
        if (head == null)
            return null;

        ListNode newHead = new ListNode(head.val);
        head = head.next;

        while (head != null) {
            ListNode temp = new ListNode(head.val);
            temp.next = newHead;
            newHead = temp;

            head = head.next;
        }

        return newHead;
    }

    // ---------------------------------------------------------------//
    // ------------------------2nd trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description: reversing the existing pointers.
     *
     * time : O(n) one traversal of the input list.
     * space : O(1)
     */
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}