/*
 * Chapter 2
 * Page 94
 *
 *   2.3 Remove Dups:
 *   Implement an algorithm to delete a node in the middle (i.e.,
 *   any node but the first and last node, not necessarily the exact middle)
 *   of a singly linked list, given only acess to that node.
 */

const LinkedList = require('./linked-list');
LinkedList.prototype.deleteMiddleNode = function(node) {
  // Empty or a single element Linked List
  if (!this.head || !this.head.next) {
    console.log('duplicates were found. Empty or a single element Linked List');
    return;
  }

  var current = this.head;

  while (current.next) {
    if (current.next == node) {
      current.next = node.next
      break;
    } else {
      current = current.next;
    }
  }
}

module.exports = LinkedList;
