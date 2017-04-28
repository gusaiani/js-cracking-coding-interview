/*
 *   Chapter 1
 *  Page 90
 *
 *  Write a method to replace all spaces in a string with %20.
 */

String.prototype.urlify = function() {
  return this.trim().split(' ').join('%20');
}
