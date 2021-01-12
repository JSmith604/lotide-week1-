const assert = require('chai').assert;
const assertEqual = require('../assert_equal');

describe("#assertEqual", () => {
  it("returns 'bird' for 'bird'", () => {
    assert.isTrue(assertEqual('bird', 'bird'));
  });
  it("returns 1 for '1'", () => {
    assert.isFalse(assertEqual(1, '1')); 
  });
});

