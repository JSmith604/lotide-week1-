
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

takeUntil = (array, callback) => {
  let finalArray = [];
  for (let item of array){ 
    let returnBool = callback(item);
    if (returnBool) {
      break;
    }
    finalArray.push(item);
  }
  return finalArray;
};

// call and use function
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

console.log(results1);
console.log(results2);

