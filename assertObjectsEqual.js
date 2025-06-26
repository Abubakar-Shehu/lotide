const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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

const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require("util").inspect; // <= add this line
  //console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


