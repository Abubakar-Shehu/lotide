const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
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