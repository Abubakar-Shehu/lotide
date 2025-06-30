const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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