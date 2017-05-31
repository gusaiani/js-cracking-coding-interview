const zero = require('../../arrays-and-strings/zero_matrix');

test("square matrix", function() {
  const fourTileSquare = {
    dimensions: {x: 4, y: 4},
    matrix: [
      'a', 'b', 'c', 'd',
      'e',  0,  'g', 'h',
      'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p'
    ]
  };

  const treatedFourTileSquare = [
    'a',  0, 'c', 'd',
     0,   0,  0,   0,
    'i',  0, 'k', 'l',
    'm',  0, 'o', 'p'
  ];

  expect(zero(fourTileSquare)).toEqual(treatedFourTileSquare);
})

test("rectangular matrix", function() {
  const untreatedRectangle = {
    dimensions: {x: 8, y: 2},
    matrix: [
      'a', 'b', 'c', 'd', 'e',  0,  'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
    ]
  };

  const treatedRectangle = [
     0 ,  0 ,  0 ,  0 ,  0 , 0,  0 ,  0,
    'i', 'j', 'k', 'l', 'm', 0, 'o', 'p'
  ];

  expect(zero(untreatedRectangle)).toEqual(treatedRectangle);
})

test("rectangular matrix with two zeros", function() {
  const untreatedRectangle = {
    dimensions: {x: 8, y: 2},
    matrix: [
      'a',  0, 'c', 'd', 'e',  0,  'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
    ]
  };

  const treatedRectangle = [
     0 ,  0 ,  0 ,  0 ,  0 , 0,  0 ,  0,
    'i',  0, 'k', 'l', 'm', 0, 'o', 'p'
  ];

  expect(zero(untreatedRectangle)).toEqual(treatedRectangle);
})
