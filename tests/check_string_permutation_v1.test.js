const checkPermutation = require('../check_string_permutation_v1');

test('"a" and "a" are permutations', () => {
  expect(checkPermutation("a", "a")).toBe(true);
});

test('"ab" and "a" are not permutations', () => {
  expect(checkPermutation("ab", "a")).toBe(false);
});

test('"abc" and "cab" are not permutations', () => {
  expect(checkPermutation("abc", "cab")).toBe(false);
});

test('longer strings are permutations', () => {
  const string1 = "qw;fypqwosiretnaorsitenq;wfyuplqwofiaesrtnaosrietnqw;fyupl";
  const string2 = "lpuyf;wqnteirsoantrseaifowqlpuyfw;qnetisroanterisowqpyf;wq";

  expect(checkPermutation(string1, string2)).toBe(true);
});
