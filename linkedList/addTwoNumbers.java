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
     * description: change the given linked lists.
     * 
     * time : O(n + m).
     * space : O(1);
     */
    public ListNode addTwoNumbers2(ListNode l1, ListNode l2) {
        ListNode pointer1 = l1;
        ListNode pointer2 = l2;
        ListNode prev = null;
        int remainder = 0;
        int sum;

        while (pointer1 != null && pointer2 != null) {
            sum = pointer1.val + pointer2.val + remainder;

            pointer1.val = sum % 10;
            remainder = sum / 10;

            prev = pointer1;
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        }

        if (pointer1 != null) {
            while (pointer1 != null) {
                sum = pointer1.val + remainder;

                pointer1.val = sum % 10;
                remainder = sum / 10;

                prev = pointer1;
                pointer1 = pointer1.next;
            }
        }

        if (pointer2 != null) {
            prev.next = pointer2;

            while (pointer2 != null) {
                sum = pointer2.val + remainder;

                pointer2.val = sum % 10;
                remainder = sum / 10;

                prev = pointer2;
                pointer2 = pointer2.next;
            }
        }

        if (remainder != 0) {
            prev.next = new ListNode(remainder);
        }

        return l1;
    }

    // ---------------------------------------------------------------//
    // ------------------------2nd trial------------------------------//
    // ---------------------------------------------------------------//
    /**
     * description: More enhanced one and without change the givin linked lists.
     * 
     * time : O(n + m).
     * space : O(n + m);
     */
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode tempHead = new ListNode();
        ListNode pointer = tempHead;
        int carry = 0;
        int v1 = 0;
        int v2 = 0;
        int sum = 0;

        while (l1 != null || l2 != null || carry != 0) {
            v1 = (l1 != null) ? l1.val : 0;
            v2 = (l2 != null) ? l2.val : 0;

            sum = v1 + v2 + carry;
            carry = sum / 10;
            sum = sum % 10;
            pointer.next = new ListNode(sum);

            pointer = pointer.next;
            l1 = (l1 != null) ? l1.next : null;
            l2 = (l2 != null) ? l2.next : null;
        }

        return tempHead.next;
    }

}