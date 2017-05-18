const isRotation = require('../check_string_rotation');

test('"waterbottle" and "erbottlewat" are rotations', () => {
  expect(isRotation("waterbottle", "erbottlewat")).toBe(true);
});

test('"coke" and "pepsi" are not rotations', () => {
  expect(isRotation("coke", "pepsi")).toBe(false);
});

test('"waterbottle" and "erbotlewat" are not rotations', () => {
  expect(isRotation("waterbottle", "erbotlewat")).toBe(false);
});
