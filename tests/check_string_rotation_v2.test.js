const isRotation = require('../check_string_rotation_v2');

test('"waterbottle" and "erbottlewat" are rotations', () => {
  expect(isRotation("waterbottle", "erbottlewat")).toBe(true);
});

test('"coke" and "pepsi" are not rotations', () => {
  expect(isRotation("coke", "pepsi")).toBe(false);
});

test('"coke" and "ecok" are rotations', () => {
  expect(isRotation("coke", "ecok")).toBe(true);
});

test('"waterbottle" and "erbotlewat" are not rotations', () => {
  expect(isRotation("waterbottle", "erbotlewat")).toBe(false);
});

test('"watwater" and "erwatwat" are rotations', () => {
  expect(isRotation("watwater", "erwatwat")).toBe(true);
});

