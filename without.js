const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let info of source) {
    if (!itemsToRemove.includes(info)) {
      newArray.push(info);
    }
  }
  return newArray;
};

module.exports = without;
// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

