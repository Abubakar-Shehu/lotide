const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const val in object1) {
    if (Array.isArray(object1[val])) {
      if (!eqArrays(object1[val],object2[val])) {
        return false;
      }
    } else if (object1[val] !== object2[val]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
