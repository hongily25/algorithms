/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let stack = [];
   let output = [];

   // Base case: if the root is empty return empty array
   if (root === null) {
       return output;
   }
   
   stack.push(root);
   
   while (stack.length > 0) {
       // Remove first item from array
       let temp = stack.shift();
       let children = temp.children;
       for (let i of children) {
           // Add the children to the beginning of the aray
           stack.unshift(i);
       }
       
       // Add the item to the beginning of the array
       output.unshift(temp.val);
   }

   
   return output;
};