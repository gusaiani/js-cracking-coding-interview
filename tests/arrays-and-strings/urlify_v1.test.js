require('../../arrays-and-strings/urlify_v1.js');

test("urlify www.google.com", function() {
  expect("www.google.com".urlify()).toBe("www.google.com")
});

test("urlify string with spaces to replace with %20", function() {
  expect("   Mr John Smith            ".urlify()).toBe("Mr%20John%20Smith")
});
