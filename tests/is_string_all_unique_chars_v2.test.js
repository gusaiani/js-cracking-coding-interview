require('../is_string_all_unique_chars_v2');

test('"" to have all unique chars', () => {
  expect("".areAllCharsUnique()).toBe(true);
});

test('"arstdhneiqwfp" to have all unique chars', () => {
  expect("arstdhneiqwfp".areAllCharsUnique()).toBe(true);
});

test('"teste" to not have all unique chars', () => {
  expect("teste".areAllCharsUnique()).toBe(false);
});
