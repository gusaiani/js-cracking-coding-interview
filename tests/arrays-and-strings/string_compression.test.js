require('../../arrays-and-strings/string_compression');

test("'' returns ''", function() {
  expect(("").compress()).toBe("");
});

test("'abcd' returns 'abcd'", function() {
  expect(("abcd").compress()).toBe("abcd");
});

test("'aabcccccaaa' returns 'a2b1c5a3'", function() {
  expect(("aabcccccaaa").compress()).toBe("a2b1c5a3");
});

