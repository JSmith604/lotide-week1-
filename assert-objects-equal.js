eqObjects = (object1, object2) => {
  let keys = Object.keys(object1)
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of keys) { 
      if (!Object.keys(object2).includes(key) || object1[key] !== object2[key]) {
        return false;
      } 
    }
  }
  return true;
};



assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return;
  }
  console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  return;
}
const object1 = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}
const object2 = {
  outdoors: "Survivor",
  fashion: "Project Runway",
  makeover: "Queer Eye"
};

assertObjectsEqual(object1, object2);

