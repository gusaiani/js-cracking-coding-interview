/*
  * Chapter 1
  * Page 90
  *
  *   1.3 Palindrome Permutation
  *   Given a string, write a function to check if it is
  *   a permutation of a palindrome.
 */

String.prototype.isPalindromePermutation = function() {
  let chars = this.toLowerCase().split(' ').join('').split('');
  let linkedList = {};
  let numberOfLettersOccurringEvenTimes = 0;

  for (char of chars) {
    if (char.toLowerCase() == char.toUpperCase()) { char.ntinue; }

    if (linkedList[char] === undefined) {
      linkedList[char] = 1;
    } else {
      linkedList[char] = undefined;
    }
  }

  for (let value in linkedList) {
    if (linkedList[value] === 1) {
      numberOfLettersOccurringEvenTimes++;
    }

    if (numberOfLettersOccurringEvenTimes > 1) {
      return false;
    }
  }

  return true;
}
