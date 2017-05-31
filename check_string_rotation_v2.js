/*
 *  Chapter 1
 *  Page 91
 *
 *  1.9 Assume you have a method isSubstring whick checks
 *  if one word is a substring of another.
 *  Given two strings, s1 and s2, write code to check
 *  if s2 is a rotation of s1 using only one call to isSubstring.
 *  (e.g., "watterbottle" is a rotation of "erbottlewat").
 */

function isRotation(string1, string2) {
  if (string1.length !== string2.length) return false;

  const longString1 = string1 + string1;

  return longString1.includes(string2);
}

module.exports = isRotation;
