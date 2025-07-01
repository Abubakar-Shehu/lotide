const map = (array, callback) => {
  const returnArr = [];
  for (let item of array) {
    returnArr.push(callback(item));
  }
  return returnArr;
};

module.exports = map;


