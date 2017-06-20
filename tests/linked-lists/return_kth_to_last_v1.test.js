const LinkedList = require('../../linked-lists/return_kth_to_last_v1.js');

test("should remove first", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);

  expect(list.returnKthToLast(2)).toBe(1);
});

test("should remove next to last", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);

  expect(list.returnKthToLast(1)).toBe(2);
});

test("should not remove from invalid kthToLast", function() {
  let list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);

  expect(list.returnKthToLast(0)).toBe(3);
});
