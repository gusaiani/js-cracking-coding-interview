/*
 * Chapter 1
 * Page 90
 *
 * 1.6 Implement a method to perform basic string compression
 * using the counts of repeated characters.
 * For example, the string aabcccccaaa would become a2blc5a3.
 * If the "compressed" string would not become smaller than
 * the original string, your method should return the
 * original string.
 * You can assume the string has only uppercase and lowercase
 * letters (a - z).
 */

String.prototype.compress = function() {
  let compressedArray = [];

  let currentChar = this.charAt(0);
  let currentCharCount = 0;

  for (let char of this) {
    if (char === currentChar) {
      currentCharCount++;
    } else {
      compressedArray.push(`${currentChar}${currentCharCount}`);

      currentChar = char;
      currentCharCount = 1;
    }
  }

  compressedArray.push(`${currentChar}${currentCharCount}`);

  compressedString = compressedArray.join('');

  return (this.length <= compressedString.length) ? this.toString() : compressedString;
}
