

assertArraysEqual = (array1,array2) => {
  if (array1.length !== array2.length) {
    console.log(`❌❌❌Assertion Failed: ${array1} !== ${array2}`);
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`❌❌❌Assertion Failed: ${array1} !== ${array2}`);
        return false;
      }
    }
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
    return true;
  }
};
  
  
assertArraysEqual([1,2,3,4],[1,2,3,4]);
assertArraysEqual([5,8,9,4],[1,2,3,4]);

module.exports = assertArraysEqual;