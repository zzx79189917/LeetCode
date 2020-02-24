/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {number} intersectVal
 * @param {ListNode} listA
 * @param {ListNode} listB
 * @param {number} skipA
 * @param {number} skipB
 * @return {ListNode}
 */
var getIntersectionNode = function(intersectVal, listA, listB, skipA, skipB) {
    let node1 = listA;
    let node2 = listB;
        
    while(node1 != node2){
        node1 = node1==null?listB: node1.next;
        node2 = node2==null?listA: node2.next;
    }
    return node1;
};

