/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head){
        return null;
    }
    let a = head;
    let len = 0;
    while(a){
        len++;
        if(!a.next){
            a.next = head;
            break;
        }
        a = a.next;
    }
    k=k%len;
    a.next = head;
    let b = null;
    while(k++<len){
        if(k==len){
            b=head;
        }
        head = head.next;
    }
    b.next = null;
    return head;
};