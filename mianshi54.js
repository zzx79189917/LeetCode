/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    if(root === null || k<1){
        return null
    }
    let res = [];
    function getTree(root){
        if(root.left) getTree(root.left);
        res.push(root.val);
        if(root.right) getTree(root.right);
    }
    getTree(root);
    return res.reverse()[k-1];
};

