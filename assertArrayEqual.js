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
    console.log(`✅✅✅ Assertion Passed: ${result} === true`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${result} !== true`);
  }
};

// Example arrays to test
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];
const array4 = [1, 2, 3, 4];
const array5 = [1, 2, '3'];

// Test cases
assertArraysEqual(array1, array2); // Should print that they are equal
assertArraysEqual(array1, array3); // Should print that they are not equal
assertArraysEqual(array1, array4); // Should print that they are not equal
assertArraysEqual(array1, array5); // Should print that they are not equal because of data type difference