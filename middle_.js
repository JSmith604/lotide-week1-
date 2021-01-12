const assertArraysEqual = require('./assert-arrays-equal');

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

module.exports = middle;