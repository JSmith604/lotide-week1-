const eqArrays = require('../eq-arrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], ['1', '2', '3']), true);
assertEqual(eqArrays([1, 2, 3], ['1', '2', '3']), false);