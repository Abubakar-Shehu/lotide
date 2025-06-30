const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
const tail = require('../tail');

// // TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  // it("returns '5' for ['5']", () => {
  //   assert.deepEqual(head(['5']), '5');
  // });
  // it("returns '5' for [5, 6, 7]", () => {
  //   assert.deepEqual(head([5, 6, 7]), 5);
  // });
  // it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
  //   assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  // });
});