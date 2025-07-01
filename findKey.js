const findKey = (object, callback) => {
  const obj = Object.entries(object);
  for (const content of obj) {
    if (callback(content[1])) {
      return content[0];
    }
  }
};

module.exports = findKey;
