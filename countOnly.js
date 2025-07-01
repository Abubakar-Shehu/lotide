const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let status in itemsToCount) {
    if (itemsToCount[status]) {
      let count = 0;
      for (let names of allItems) {
        if (status === names) {
          count++;
        }
      }
      result[status] = count;
    }
  }
  return result;
};

module.exports = countOnly;
