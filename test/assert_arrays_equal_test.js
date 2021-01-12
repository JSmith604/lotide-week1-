const assert = require('chai').assert;
const assertArraysEqual = require('../assert-arrays-equal');

describe("#assertArraysEqual", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns [1, 2, 3, 4] for [1, 2, 3, 4, 5]", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])); 
  });
});


assertArraysEqual([1,2,3,4],[1,2,3,4]);
assertArraysEqual([5,8,9,4],[1,2,3,4]);