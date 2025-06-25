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

const flatten = function(array) {
  //let nonObject = [];
  let object = [];
  //let object;
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedArr of element) {
        object.push(nestedArr);
      }
    } else {
      object.push(element);
    }
  }
  // console.log(nonObject)
  return object;

};

console.log(flatten([1, 2, [3, 4], 5, [6]]));