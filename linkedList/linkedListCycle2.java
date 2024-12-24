/**
 * 142. Linked List Cycle II
 * 
 * ---------------------------
 * link: https://leetcode.com/problems/linked-list-cycle-ii/
 */
class Solution {

    // ---------------------------------------------------------------//
    // ------------------------1st trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description: Floyd's Cycle Detection Algorithm, aka "Tortoise and Hare"
     * 
     * time : O(n).
     * space : O(1);
     */
    public ListNode detectCycle(ListNode head) {
        if (head == null || head.next == null) {
            return null;
        }

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                break;
            }
        }

        if (fast == null || fast.next == null) {
            return null;
        }

        ListNode temp = head;
        while (temp != fast) {
            temp = temp.next;
            fast = fast.next;
        }

        return temp;
    }

}