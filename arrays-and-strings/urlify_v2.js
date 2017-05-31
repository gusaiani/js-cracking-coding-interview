/*
 *   Chapter 1
 *  Page 90
 *
 *  Write a method to replace all spaces in a string with %20.
 */

String.prototype.urlify = function() {
  return this.split(' ').reverse().trimSide().reverse().trimSide().join('%20');
}

Array.prototype.trimSide = function() {
  let newArray = this.slice();

  for (i = 0; i < this.length; i++) {
    if (this[i] == '') {
      newArray.shift();
    } else {
      break;
    }
  }

  return newArray;
}
