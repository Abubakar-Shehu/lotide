const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  let result = {};
  
  const noSpaces = string.split(" ").join("");
  const arrayOfLetter = noSpaces.split("")
  let individualLetter = [];
  // Want to iterate over the string to count how many letters there are
  // Need to count how many each letter are but also be able to know what letters they are
  for (const letters of arrayOfLetter) {
    if(!individualLetter.includes(letters)){
      individualLetter.push(letters)
    }
  }

  for(const lets of individualLetter) {
    let count = 0;
    for (const amo of arrayOfLetter) {
      if (lets === amo){
        count++
      }
    }
    result[lets] = count
  }
  return result
};

console.log(countLetters("lighthouse in the house"))
console.log(countLetters('LHL'))