//This function which will return all the indices (zero-based positions) in the string where each character is found.

const letterPositions = function(sentence) {                     
  const results = {};
  const sentenceN = sentence.replace(/ /g, "");
  for (let i = 0; i < sentenceN.length; i++) {
    //in this loop we r checking if there is already a key inside results, we can't use dot notation with that, push index in results
    if (results[sentenceN[i]]) {
      results[sentenceN[i]].push(i);
    } else {
      //If the key doesn't exist, set the value of the current index
      results[sentenceN[i]] = [i];          
    }
  }
  //return results object
  return results;                           
};


//exporting  letterPositions function

module.exports = letterPositions;             

  