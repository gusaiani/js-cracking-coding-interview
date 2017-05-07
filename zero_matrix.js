/*
 * Chapter 1
 * Page 91
 *
 * 1.8 Write an algorithm such that if an element in an M x N matrix
 * is zero, its entire row and column are set to 0.
 */

function zero(arr) {
  let indexesWithZero = [];

  const matrix = arr.matrix;
  const rowLength = arr.dimensions.x;
  const columnHeight = arr.dimensions.y;

  let newArray = matrix.slice(0);

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] === 0) {
      indexesWithZero.push(i);
    }
  }

  for (let itemPosition of indexesWithZero) {
    const itemX = itemPosition % rowLength;
    const itemY = Math.floor(itemPosition / rowLength)

    newArray = zeroAllWithXIn(newArray, itemX, columnHeight, rowLength);
    newArray = zeroAllWithYIn(newArray, itemY, columnHeight, rowLength);

  }
  return newArray;
};

function zeroAllWithXIn(matrix, x, columnHeight, rowLength) {
  for (let i = 0; i < columnHeight; i++) {
    indexToConvertToZero = (i * rowLength) + x;
    matrix[indexToConvertToZero] = 0;
  }

  return matrix;
}

function zeroAllWithYIn(matrix, y, columnHeight, rowLength) {
  for (let i = 0; i < rowLength; i++) {
    indexToConvertToZero = (rowLength * y) + i;
    matrix[indexToConvertToZero] = 0;
  }

  return matrix;
}

module.exports = zero;
