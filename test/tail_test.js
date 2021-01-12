const assert = require('chai').assert;
const tail = require('../tail_');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual([2, 3], tail([1, 2, 3]));
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual([], tail(['5'])); 
  })
});


