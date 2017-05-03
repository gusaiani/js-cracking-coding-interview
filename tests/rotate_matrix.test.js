require('../rotate_matrix');

test("[[0,0]] returns [[0,0]]", function() {
  expect([[0,0]].rotate()).toEqual([[0,0]]);
});

test("4-sided matrix rotates", function() {
  const fourTileSquare = [
    [0,0], [0,1], [0,2], [0,3],
    [1,0], [1,1], [1,2], [1,3],
    [2,0], [2,1], [2,2], [2,3],
    [3,0], [3,1], [3,2], [3,3]
  ];

  const rotatedFourTileSquare = [
    [3,0], [2,0], [1,0], [0,0],
    [3,1], [2,1], [1,1], [0,1],
    [3,2], [2,2], [1,2], [0,2],
    [3,3], [2,3], [1,3], [0,3]
  ];

  expect(fourTileSquare.rotate()).toEqual(rotatedFourTileSquare);
})

