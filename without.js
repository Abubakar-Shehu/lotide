const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1,array2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let items of itemsToRemove) {
    for (let info of source) {
      if (typeof items === typeof info){
        if (items !== info) {
          newArray.push(info);
        }
      }
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
