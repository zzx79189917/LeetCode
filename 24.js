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
var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    let t = head.next;
    head.next = swapPairs(head.next.next)
    t.next = head;
    return t;
};

var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    let dummy = new ListNode();
    dummy.next = head;
    let pre = dummy;
    let cur = head;
    while(cur && cur.next){
        pre.next = cur.next;
        cur.next = pre.next.next;
        pre.next.next = cur;
        pre = cur;
        cur = cur.next;
    }
    return dummy.next;
};