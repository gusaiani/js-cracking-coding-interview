const LinkedList = require('../../linked-lists/kth_to_last_v2');

test("should return first", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);

  expect(list.kthToLast(2)).toBe(1);
});

test("should return next to last", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);

  expect(list.kthToLast(1)).toBe(2);
});

test("should return last", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);

  expect(list.kthToLast(0)).toBe(3);
});
