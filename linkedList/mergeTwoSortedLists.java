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
     * time : O(n) where n is the length of the small list.
     * space : O(1);
     */
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) {
            return list2;
        }

        if (list2 == null) {
            return list1;
        }

        ListNode pointer;
        ListNode head;
        ListNode pointer1 = list1;
        ListNode pointer2 = list2;

        if (pointer1.val < pointer2.val) {
            head = pointer1;
            pointer1 = pointer1.next;
        } else {
            head = pointer2;
            pointer2 = pointer2.next;
        }
        pointer = head;

        while (pointer1 != null && pointer2 != null) {

            if (pointer1.val < pointer2.val) {
                pointer.next = pointer1;
                pointer1 = pointer1.next;
            } else {
                pointer.next = pointer2;
                pointer2 = pointer2.next;
            }
            pointer = pointer.next;
        }

        pointer.next = (pointer1 != null) ? pointer1 : pointer2;

        return head;
    }
}