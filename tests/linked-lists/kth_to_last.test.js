const LinkedList = require('../../linked-lists/kth_to_last');

test("should return first", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);
  list.kthToLast(2);

  expect(list.head.value).toBe(2);
});

test("should return next to last", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);
  list.kthToLast(1);

  expect(list.head.next.value).toBe(3);
});

test("should return last", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);
  list.kthToLast(0);

  expect(list.head.next.next).toBe(null);
});
