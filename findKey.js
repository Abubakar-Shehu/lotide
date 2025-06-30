const findKey = (object, callback) => {
  const obj = Object.entries(object);
  for (const content of obj) {
    if (callback(content[1])) {
      return content[0];
    }
  }
};

module.exports = findKey;

// console.log(findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ));// => "noma"