// Given a n-ary tree, find its maximum depth.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    // If there is no tree, the max depth is 0
    if (root === null) {
        return 0;
    }
    
    // If the node has no children return 1
    if (root.children.length === 0) {
        return 1;
    }
    
    let depths = [];
    
    // Get the depth of each child node
    for (let i of root.children) {
        depths.push(maxDepth(i));
    }
    
    // Get the node with the largest depth
    return Math.max(...depths) + 1;
    
};