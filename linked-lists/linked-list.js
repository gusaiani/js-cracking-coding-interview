function LinkedList() {
  this.head = null;
}

LinkedList.prototype.push = function(val) {
  var node = {
    value: val,
    next: null
  }

  if (!this.head) {
    this.head = node;
  } else {
    var current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}

module.exports = LinkedList;
