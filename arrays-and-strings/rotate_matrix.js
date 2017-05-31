/*
 * Chapter 1
 * Page 91
 *
 * 1.7 Given an image represented by an NxN matrix,
 * where each pixel in the image is 4 bytes,
 * write a method to rotate the image by 90 degrees.
 * Can you do this in place?
 */

Array.prototype.rotate = function() {
  var newMatrix = [];
  const rowLength = Math.sqrt(this.length);
  newMatrix.length = this.length;

  for (var i = 0; i < this.length; i++) {
    const x = i % rowLength;
    const y = Math.floor(i / rowLength);

    const newX = rowLength - y - 1;
    const newY = x;

    const newPosition = newY * rowLength + newX;
    newMatrix[newPosition] = this[i];
  }

  return newMatrix;
}
