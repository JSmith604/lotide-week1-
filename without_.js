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


assertArraysEqual = (array1,array2) => {
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

const without = function(sourceArray, itemsToRemoveArray) {
  let newArray = [];
  if (eqArrays(sourceArray,itemsToRemoveArray) !== false) {
    return [];
  } else {
    for(i = 0; i < sourceArray.length; i++) {
      if (itemsToRemoveArray.includes(sourceArray[i] !== true)){
          newArray.push(sourceArray[i])
      }   
    }  
  }
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
  