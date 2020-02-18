/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(!root){
        return [];
    }
    let res = [];
    let queue = [root];
    while(queue.length){
        let first = queue.shift();
        res.push(first.val);
        first.left && queue.push(first.left);
        first.right && queue.push(first.right);
    }
    return res;
};