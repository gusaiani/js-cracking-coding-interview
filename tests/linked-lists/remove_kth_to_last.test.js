const LinkedList = require('../../linked-lists/remove_kth_to_last');

test("should remove first", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);
  list.removeKthToLast(2);

  expect(list.head.value).toBe(2);
});

test("should remove next to last", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);
  list.removeKthToLast(1);

  expect(list.head.next.value).toBe(3);
});

test("should remove last", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);
  list.removeKthToLast(0);

  expect(list.head.next.next).toBe(null);
});
