const countLetters = function(string) {
  let result = {};
  
  const noSpaces = string.split(" ").join("");
  const arrayOfLetter = noSpaces.split("");
  let individualLetter = [];

  for (const letters of arrayOfLetter) {
    if (!individualLetter.includes(letters)) {
      individualLetter.push(letters);
    }
  }

  for (const lets of individualLetter) {
    let count = 0;
    for (const amo of arrayOfLetter) {
      if (lets === amo) {
        count++;
      }
    }
    result[lets] = count;
  }
  return result;
};

module.exports = countLetters;
