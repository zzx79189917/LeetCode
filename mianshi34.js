/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root) return [];
    let paths = [];
    __pathSum(root, sum, paths, []);
    return paths; 
};

function __pathSum(root, sum, paths, path){
    if(!root) return;
    path = [...path, root.val];
    if(!root.left && !root.right && root.val === sum){
        paths.push(path);
        return;
    }
    __pathSum(root.left, sum-root.val, paths, path);
    __pathSum(root.right, sum-root.val, paths, path);
}