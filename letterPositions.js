const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
   
    if (letter !== ' ' && results[letter]) {
      results[letter].push(i);
    } else if (letter !== ' ') {
      results[letter] = [i];
    }
  }

  return results;
};



console.log(letterPositions("lighthouse in the house"));