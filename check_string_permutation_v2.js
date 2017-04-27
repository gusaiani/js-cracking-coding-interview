/*
 *  Chapter 1
 *  Page 90
 *
 *  1.2 Given two strings, write a method to decide if one is
 * a permutation of the other.
 */

function isPermutation(string1, string2) {
  if (string1.length !== string2.length) return false;

  let chars = {};

  for (i = 0; i < string1.length; i++) {
    const char = string1.charAt(i);

    chars[char] = (isNaN(chars[char]) ? 1 : chars[char] + 1);
  }

  for (j = 0; j < string2.length; j++) {
    const char = string2.charAt(j);
    chars[char]--;
  }

  for (var k in chars ) {
    if (chars[k] !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isPermutation;
