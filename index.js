const head   = require('./head_');
const tail   = require('./tail_');
const middle = require('./middle_');
const assertEqual = require('./assert_equal');
const eqArrays = require('./eq_arrays');
const assertArraysEqual = require('./assert_arrays_equal');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual
};