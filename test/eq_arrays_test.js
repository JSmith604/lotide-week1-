const assert = require('chai').assert;
const eqArrays = require('../eq-arrays');

describe("eqArrays", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns [1, 2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.isTrue(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); 
  });
});

