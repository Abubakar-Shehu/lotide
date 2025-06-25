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

const middle = function(array) {
  const returnArray = [];
  const midIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return returnArray;
  }
  if (array.length % 2 === 0) {
    returnArray.push(array[midIndex - 1], array[midIndex]);
  }
  if (array.length % 2 !== 0) {
    returnArray.push(array[midIndex]);
  }
  return returnArray;
};

// Test cases for `middle` function

// Test with an array of one element
assertArraysEqual(middle([1]), []);  // Expected output: []

// Test with an array of two elements
assertArraysEqual(middle([1, 2]), []);  // Expected output: []

// Test with an odd-length array
assertArraysEqual(middle([1, 2, 3]), [2]);  // Expected output: [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);  // Expected output: [3]

// Test with an even-length array
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);  // Expected output: [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);  // Expected output: [3, 4]

// Test with an empty array
assertArraysEqual(middle([]), []);  // Expected output: []