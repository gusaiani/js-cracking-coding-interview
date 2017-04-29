/*
 * Chapter 1
 * Page 90
 *
 * 1.3 There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check
 * if they are one edit (or zero edits) away.
 */

function oneAway(string1, string2) {
  if (Math.abs(string1.length - string2.length) > 1) return false;

  let differences = 0;

  let chars1 = string1.split('');
  let chars2 = string2.split('');

  while (chars1.length != 0) {
    const char1 = chars1.shift();
    const char2 = chars2.shift();

    if (char1 != char2) {
      if (chars1[0] == char2) {
        chars1.shift();
      } else if (char1 == chars2[0]) {
        chars2.shift();
      }
      differences++;
    }

    if (differences == 2) return false;
  }

  differences += Math.abs(chars1.length - chars2.length)

  return (differences < 2) ? true : false;

}


module.exports = oneAway;

