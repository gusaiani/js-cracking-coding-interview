require('../is_string_all_unique_chars_v1');

test('"" to have all unique chars', () => {
  expect("".areAllCharsUnique()).toBe(true);
});

