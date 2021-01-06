let assertArraysEqual = (array1,array2) => {
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

middle = (array) => {
  let middleNumber = [];
  if (array.length < 3) {
    return middleNumber;
  }
  if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length / 2);
    middleNumber.push(array[middleIndex]);
    return middleNumber;
  }
  let firstMiddleIndex = array.length / 2 - 1;
  let secondMiddleIndex = array.length / 2;
  middleNumber.push(array[firstMiddleIndex]);
  middleNumber.push(array[secondMiddleIndex]);
  return middleNumber;
};

assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2]);