 //This function checks if two arrays are equal

const eqArrays = function(arr1, arr2) {               
  for (let i = 0; i < arr1.length; i++) {
    // If the lengths not equal or ith element not equal, return false
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {        
      return false;
    }
  }
  return true;                                                x
};

 // exporting the eqArrays function

module.exports = eqArrays;                                