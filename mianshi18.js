/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if(!head){
        return null;
    }
    let newHeader = new ListNode();
    newHeader.next = head;
    let curNode = newHeader;
    while(curNode.next){
        if(curNode.next.val === val){
            curNode.next = curNode.next.next;
            return newHeader.next;
        }
        curNode = curNode.next;
    }
};