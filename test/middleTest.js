const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// // Test cases for `middle` function

// // Test with an array of one element
// assertArraysEqual(middle([1]), []);  // Expected output: []

// // Test with an array of two elements
// assertArraysEqual(middle([1, 2]), []);  // Expected output: []

// // Test with an odd-length array
// assertArraysEqual(middle([1, 2, 3]), [2]);  // Expected output: [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);  // Expected output: [3]

// // Test with an even-length array
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);  // Expected output: [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);  // Expected output: [3, 4]

// // Test with an empty array
// assertArraysEqual(middle([]), []);  // Expected output: []

describe("#head", () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  // it("returns [] for []", () => {
  //   assert.strictEqual(middle([]), []);
  // });
});