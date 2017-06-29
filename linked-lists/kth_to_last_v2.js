/*
 * Chapter 2
 * Page 94
 *
 *   2.1 Return kth to last:
 *   Implement an algorithm to find the kth to last element of a singly linked list.
 */

const LinkedList = require('./linked-list');

LinkedList.prototype.kthToLast = function(kthToLast) {
  // Empty or a single element Linked List
  if (!this.head) {
    return;
  }

  let p1;
  let p2;
  let q;

  p1 = this.head;
  p2 = p1.next;

  q = this.head;

  for (i = 0; i < kthToLast; i++) {
    p2 = p2.next;
  }

  while (p2) {
    p2 = p2.next;
    q = q.next;
  }

  return q.value;
}

module.exports = LinkedList;
