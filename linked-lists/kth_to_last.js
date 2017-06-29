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
    console.log('This list is empty');
    return;
  }

  var p1;
  var p2;
  var nodes = 1;

  p1 = this.head;
  p2 = p1.next;

  while (p2) {
    nodes++;
    p2 = p2.next;
  }

  const nodeToReturn = nodes - kthToLast - 1;
  p1 = this.head;
  p2 = p1.next;

  if (kthToLast == (nodes - 1)) {
    this.head = p2;
    p1 = p2;
    p2 = p2.next;
  } else {
    for (i = 0; i < nodes; i++) {
      if (i == nodeToReturn - 1) {
        p1.next = p2.next;
        i++;
      } else {
        p1 = p2;
      }
      p2 = p2.next;
    }
  }
}

module.exports = LinkedList;
