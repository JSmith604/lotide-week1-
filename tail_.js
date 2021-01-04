assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertation Failed: ${actual} !== ${expected}`);
  }
  return assertEqual;
};

tail = (array) =>  {
  if (array === undefined || array.length <= 1) {
    return [];
  } else {
    newArray = array.slice(1);
    return (newArray);
  }
};

console.log(tail([1,2,3,4]));

