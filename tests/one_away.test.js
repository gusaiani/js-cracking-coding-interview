const oneAway = require('../one_away');

test("'pale' and 'ple' are one away", function() {
  expect(oneAway("pale", "ple")).toBe(true);
});

test("'ple' and 'pale' are one away", function() {
  expect(oneAway("ple", "pale")).toBe(true);
});

test("'pales' and 'pale' are one away", function() {
  expect(oneAway("pales", "pale")).toBe(true);
});

test("'pale' and 'palesssss' are not one away", function() {
  expect(oneAway("pale", "palesssss")).toBe(false);
});

test("'pale' and 'bale' are one away", function() {
  expect(oneAway("pale", "bale")).toBe(true);
});

test("'pale' and 'bake' are not one away", function() {
  expect(oneAway("pale", "bake")).toBe(false);
});
