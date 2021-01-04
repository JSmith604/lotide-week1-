assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertation Failed: ${actual} !== ${expected}`);
  }
  return assertEqual;
};


head = (array) => {
  if (array === undefined || array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
} 






assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")

