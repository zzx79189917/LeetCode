/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return [];
    }
    let res = [];
    let queue = [root];
    while(queue.length){
        let len = queue.length;
        let temp = [];
        for(let i=0;i<len;i++){
            let first = queue.shift();
            first.left && queue.push(first.left);
            first.right && queue.push(first.right);
            temp.push(first.val)
        }
        res.push(temp);
    }
    return res;
};