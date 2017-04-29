require('../palindrome_permutations_v1');

test("'Tact Coa' is a palindrome permutation", function() {
  expect("Tact Coa".isPalindromePermutation()).toBe(true);
});

test("'abc' is not a palindrome permutation", function() {
  expect("abc".isPalindromePermutation()).toBe(false);
});

test("'ab, ab' is a palindrome permutation", function() {
  expect("ab, ab".isPalindromePermutation()).toBe(true);
});
