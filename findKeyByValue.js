const findKeyByValue = function(object, value) {
  let key;
  for (const keys in object) {
    if (object[keys] === value) {
      key = keys;
      return key;
    }
  }
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);