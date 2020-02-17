/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root){
        return true;
    }

    return __isSymmetric(root.left, root.right);
};

function __isSymmetric(l1, l2){
    if(!l1 && !l2) return true;
    if(!l1 || !l2) return false;
    return l1.val === l2.val && __isSymmetric(l1.left, l2.right) && __isSymmetric(l1.right, l2.left);
}