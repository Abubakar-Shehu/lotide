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


