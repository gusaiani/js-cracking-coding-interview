require('../../arrays-and-strings/is_string_all_unique_chars_v1');

test('"" to have all unique chars', () => {
  expect("".areAllCharsUnique()).toBe(true);
});

test('"arstdhneiqwfp" to have all unique chars', () => {
  expect("arstdhneiqwfp".areAllCharsUnique()).toBe(true);
});

test('"teste" to not have all unique chars', () => {
  expect("teste".areAllCharsUnique()).toBe(false);
});
