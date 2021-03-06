/*
 * Chapter 2
 * Page 94
 *
 *   2.1 Remove Dups:
 *   Write code to remove duplicates from an unsorted linked list
 */

const LinkedList = require('./linked-list');

LinkedList.prototype.removeDuplicates = function() {
  // Empty or a single element Linked List
  if (!this.head || !this.head.next) {
    console.log('No duplicates were found. Empty or a single element Linked List');
    return;
  }

  var p1;
  var p2;
  var nodes = {};

  p1 = this.head;
  p2 = p1.next;
  nodes[p1.value] = true;

  while (p2) {
    var value = p2.value;
    if (nodes[value]) {
      p1.next = p2.next;
    } else {
      nodes[value] = true;
      p1 = p2;
    }
    p2 = p2.next;
  }
}

module.exports = LinkedList;
