/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let stack = [];
    let output = [];

    // Base case: if the root is empty return empty array
    if (root === null) {
        return output;
    }
    
    stack.push(root);
    
    while (stack.length > 0) {
        // Add the node to output
        let temp = stack.pop();
        output.push(temp.val);
        
        // Add the children
        let childNodes = temp.children.reverse();
        
        // Iterate through
        for (let i of childNodes) {
            stack.push(i);
        }
    }
    
    return output;
    
};