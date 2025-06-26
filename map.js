const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  // console.log("array: ", array);
  // console.log("callback: ", callback);
  
  const returnArr = [];
  for (let item of array) {
    // console.log("item BEFORE: ", item);
    // console.log("item AFTER: ", callback(item));
    // console.log("---");

    returnArr.push(callback(item));
    
  }
    return returnArr;
}

const results1 = map(words, (word) => word[0]);
console.log(results1);

