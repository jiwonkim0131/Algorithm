/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Linked List, Two Pointer 문제

const removeNthFromEnd = (head, n) => {
    let left = head, right = head;
  
    for (let i = 0; i < n; i++) {
        left = left.next;
    }
  
    if (!left) return head.next;   //list.length === n
  
    while (left.next) {
     left = left.next;
     right = right.next;
    }
  
    right.next = right.next.next;
    return head;
};
