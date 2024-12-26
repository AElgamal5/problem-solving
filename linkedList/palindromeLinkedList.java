/**
 * 234. Palindrome Linked List
 * 
 * ---------------------------
 * link: https://leetcode.com/problems/palindrome-linked-list/
 */
class Solution {

    // ---------------------------------------------------------------//
    // ------------------------1st trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description:
     * get mid node
     * spilt the list into two list with the same length
     * reverse one list
     * loop over the two lists to check if each element are equal its corresponding
     * one
     * 
     * time : O(n).
     * space : O(1);
     */
    public boolean isPalindrome1(ListNode head) {
        ListNode pointer = head;
        int length = 0;

        while (pointer != null) {
            length++;
            pointer = pointer.next;
        }

        boolean isOdd = length % 2 != 0;
        int mid = length / 2;

        pointer = head;
        while (length - 1 > mid) {
            length--;
            pointer = pointer.next;
        }

        ListNode temp = pointer;
        pointer = pointer.next;
        temp.next = null;

        head = this.reverse(head);

        if (isOdd) {
            head = head.next;
        }

        while (pointer != null && head != null) {
            if (pointer.val != head.val)
                return false;

            pointer = pointer.next;
            head = head.next;
        }

        return pointer == null && head == null;
    }

    public ListNode reverse(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        ListNode next = null;

        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    // ---------------------------------------------------------------//
    // ------------------------2nd trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * more cleaner
     * 
     * time : O(n).
     * space : O(1);
     */
    public boolean isPalindrome(ListNode head) {

        if (head == null || head.next == null)
            return true;

        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode secondHalf = this.reverse(slow);
        ListNode firstHalf = head;

        while (secondHalf != null) {
            if (secondHalf.val != firstHalf.val)
                return false;
            secondHalf = secondHalf.next;
            firstHalf = firstHalf.next;
        }

        return true;
    }

}