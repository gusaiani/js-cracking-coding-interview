require('../rotate_matrix');

test("[[0,0]] returns [[0,0]]", function() {
  expect([[0,0]].rotate()).toEqual([[0,0]]);
});

test("4-sided matrix rotates", function() {
  const fourTileSquare = [
    'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p'
  ];

  const rotatedFourTileSquare = [
    'm', 'i', 'e', 'a',
    'n', 'j', 'f', 'b',
    'o', 'k', 'g', 'c',
    'p', 'l', 'h', 'd'
  ];

  expect(fourTileSquare.rotate()).toEqual(rotatedFourTileSquare);
})

