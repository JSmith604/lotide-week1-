const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

takeUntil = (array, callback) => {
  console.log(array);
  console.log(callback);
  let finalArray = [];
  for (item in array){ 
    let returnbol = callback(item);
    console.log(returnbol);
    // if (!callback(item)) {
    //   finalArray.push(item);
    //   console.log(finalArray);
    // } else {
    //   return finalArray;
    // }
    // return finalArray;
  }
};
const results1 = takeUntil(data1, x => x < 0);
const results2= takeUntil(data2, x => x === ',');
console.log(takeUntil(data1, data2));
 
console.log(results1);
console.log(results2);

// assertArraysEqual = (array1,array2) => {
//   if (array1.length !== array2.length) {
//     console.log(`❌❌❌Assertion Failed: ${array1} !== ${array2}`);
//     return;
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         console.log(`❌❌❌Assertion Failed: ${array1} !== ${array2}`);
//         return;
//       }
//     }
//     console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
//   }
// };

