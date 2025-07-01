const flatten = function(array) {
  let object = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedArr of element) {
        object.push(nestedArr);
      }
    } else {
      object.push(element);
    }
  }
  return object;

};

module.exports = flatten;

