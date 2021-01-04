const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertation Failed: ${actual} !== ${expected}`);
  }
  return assertEqual;
};

assertEqual(1, 1);
assertEqual("1", 1);
assertEqual('bird', 'bird');
assertEqual('bird', "Bird");
