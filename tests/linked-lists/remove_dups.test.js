const LinkedList = require('../../linked-lists/remove_dups');

test("should remove LinkedList dupe", function() {
  let list = new LinkedList();

  list.push(3);
  list.push(3);
  list.removeDuplicates();

  expect(list.head.next).toBe(null);
});

test("should remove LinkedList dupe", function() {
  let list = new LinkedList();

  list.push(3);
  list.push(3);
  list.push(4);
  list.push(5);
  list.push(6);
  list.push(4);
  list.removeDuplicates();

  expect(list.head.next.next.next.next).toBe(null);
});

test("should keep LinkedList without dupe as is", function() {
  let list = new LinkedList();

  list.push(3);
  list.push(4);
  list.removeDuplicates();

  expect(list.head.next.value).toBe(4);
});
