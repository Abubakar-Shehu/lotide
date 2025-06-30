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

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));