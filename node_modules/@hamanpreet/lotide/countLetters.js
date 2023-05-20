// This function returns a count of each of the letters in that sentence.

const countLetters = function(sentence) {                  
  const results = {};

  //removing the spaces from the input string

  let sentenceNew = sentence.replace(/ /g, " ");          
  for (const letter of sentenceNew) {
    if (results[letter]) {
      //if the results object already has that specific letter key in it, add 1 
      results[letter] += 1;                                
    } else {
      // if the key doesn't exist, make the key and set its value to 1
      results[letter] = 1;                                 
    }
  }
  // return the resulting results object
  return results;                                          
};

// exporting the countLetters function

module.exports = countLetters;                             