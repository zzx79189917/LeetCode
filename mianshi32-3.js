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
    let j = 0;
    while(queue.length){
        let len = queue.length;
        let temp = [];
        for(let i=0;i<len;i++){
            let first = queue.shift();
            first.left && queue.push(first.left);
            first.right && queue.push(first.right);
            if(j%2===1){
                temp.unshift(first.val);
            }else{
                temp.push(first.val);
            }
        }
        
        res.push(temp);
        j++;
    }
    return res;
};