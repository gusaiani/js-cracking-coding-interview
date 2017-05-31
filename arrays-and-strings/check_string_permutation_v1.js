/*
 *  Chapter 1
 *  Page 90
 *
 *  1.2 Given two strings, write a method to decide if one is
 * a permutation of the other.
 */

String.prototype.sort = function() {
  return this.split('').sort().join();
}

function isPermutation(string1, string2) {
  return string1.sort() === string2.sort();
}

module.exports = isPermutation;
