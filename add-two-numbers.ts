/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
 
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let current;
    let result = current;
    
    let carry = 0;
    
    let p = l1;
    let q = l2;
    
    // Loop through l1 and l2
    while (p || q) {
        let x = 0, y = 0;
        
        if (p) {
            x = p.val;
        } 
        
        if (q) {
            y = q.val;
        }
        
        // Add the node's value of l1 and l2
        let sum = x + y + carry;
        
        carry = Math.floor(sum / 10);
        
        if (result) {
            current.next = new ListNode(sum % 10);
            current = current.next;
        } else {
            result = new ListNode(sum % 10);
            current = result;
        }
        
        if (p) { 
            p = p.next;
        } else {
            p = false;
        }
        if (q) {
            q = q.next;
        } else {
            q = false;
        }
        
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);  
    }
    
    return result;
    
};