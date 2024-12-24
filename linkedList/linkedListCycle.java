/**
 * 141. Linked List Cycle
 * 
 * ---------------------------
 * link: https://leetcode.com/problems/linked-list-cycle/
 */
class Solution {

    // ---------------------------------------------------------------//
    // ------------------------1st trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description: using HashSet
     * 
     * time : O(n)
     * space : O(n)
     */
    public boolean hasCycle1(ListNode head) {
        if (head == null) {
            return false;
        }

        HashSet<ListNode> seen = new HashSet<>();
        ListNode pointer = head;

        while (pointer != null) {
            if (seen.contains(pointer)) {
                return true;
            }
            seen.add(pointer);
            pointer = pointer.next;
        }

        return false;
    }

    // ---------------------------------------------------------------//
    // ------------------------2nd trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description: Floyd's Cycle Detection Algorithm, aka "Tortoise and Hare"
     * 
     * time : O(n).
     * space : O(1);
     */
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                return true;
            }
        }

        return false;
    }

}