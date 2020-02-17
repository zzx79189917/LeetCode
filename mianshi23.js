/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head){
        return null;
    }
    let node = head;
    let preNode = null;
    while(node.next){
        let nextNode = node.next;
        node.next = preNode;
        preNode = node;
        node = nextNode;
    }
    node.next = preNode;
    return node;
};