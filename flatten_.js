eqArrays = (array1,array2) => {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = (array1,array2) => {
  if (array1.length !== array2.length) {
    console.log(`❌❌❌Assertion Failed: ${array1} !== ${array2}`);
    return;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`❌❌❌Assertion Failed: ${array1} !== ${array2}`);
        return;
      }
    }
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  }
};

const flatten = (array) => {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenedArray = flattenedArray.concat(array[i]);
        } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;

}
console.log(flatten([1, 2, [3, 4], 5, [6]]));

