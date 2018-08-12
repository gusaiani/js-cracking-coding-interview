const LinkedList = require('../../linked-lists/delete-middle-node');

test("should remove a node", function() {
  let list = new LinkedList();

  const arr = ["a", "b", "c", "d", "e", "f"]
  arr.forEach(item => { list.push(item) })
  const node = list.head.next.next
  list.deleteMiddleNode(node)

  expect(list.head.next.next.value).toBe('d');
});

test("also should remove a node", function() {
  let list = new LinkedList();

  const arr = ["a", "b", "c", "d", "e", "f"]
  arr.forEach(item => { list.push(item) })
  const node = list.head.next
  list.deleteMiddleNode(node)

  expect(list.head.next.value).toBe('c');
});

