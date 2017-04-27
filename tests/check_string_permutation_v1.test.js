const isPermutation = require('../check_string_permutation_v1');

test('"a" and "a" are permutations', () => {
  expect(isPermutation("a", "a")).toBe(true);
});

test('"ab" and "a" are not permutations', () => {
  expect(isPermutation("ab", "a")).toBe(false);
});

test('"abc" and "cab" are permutations', () => {
  expect(isPermutation("abc", "cab")).toBe(true);
});

test('longer strings are permutations', () => {
  const string1 = "qw;fypqwosiretnaorsitenq;wfyuplqwofiaesrtnaosrietnqw;fyupl";
  const string2 = "lpuyf;wqnteirsoantrseaifowqlpuyfw;qnetisroanterisowqpyf;wq";

  expect(isPermutation(string1, string2)).toBe(true);
});
