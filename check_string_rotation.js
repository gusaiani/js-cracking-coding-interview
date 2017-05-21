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

  const char1 = string1.charAt(0);

  for (let i = 0; i < string1.length; i++) {
    let char2 = string2.charAt(i);

    if (char1 == char2) {
      const charsLeftInString2 = string2.length - i - 1;

      for (let j = 1; j < charsLeftInString2; j++) {
        let nextChar1 = string1.charAt(j);
        let nextChar2;

        if (j <= charsLeftInString2) {
          nextChar2 = string2.charAt(i + j);
        } else {
          nextChar2 = string2.charAt(i + j - string2.length);
        }

        if (nextChar1 != nextChar2) break;
        if (j = string2.length) return true;
      }
    }
  }

  return false;
}

module.exports = isRotation;
