/*
 * Chapter 2
 * Page 94
 *
 *   2.1 Remove Dups:
 *   Write code to remove duplicates from an unsorted linked list
 */

const LinkedList = require('./linked-list');

LinkedList.prototype.removeKthToLast = function(kthToLast) {
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

  const nodeToRemove = nodes - kthToLast - 1;
  p1 = this.head;
  p2 = p1.next;

  if (kthToLast == (nodes - 1)) {
    this.head = p2;
    p1 = p2;
    p2 = p2.next;
  } else {
    for (i = 0; i < nodes; i++) {
      if (i == nodeToRemove - 1) {
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
