/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let stack = [];
    let node = head;
    while(node){
        stack.push(node.val);
        node = node.next;
    }
    return stack.reverse();
};