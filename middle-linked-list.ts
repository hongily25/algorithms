// Given a non-empty, singly linked list with head node head, return a middle node of linked list. If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    // If there's only one node return that
    if (head.next === null) {
        return head;
    }

    let count = 0;
    let list = head;

    // Count the number of nodes
    while (list) {
        count++;
        list = list.next;
    }
    
    // Find the midpoint
    let mid = Math.floor(count/2);

    // Go through the linked list until you're just before the midpoint
    let i = 0;
    while (i < mid) {
        head = head.next;
        i++;
    }
    
    // Return the node from the midpoint on
    return head;
};