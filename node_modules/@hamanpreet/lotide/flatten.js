//This function converts nested array to 1D array 

const flatten = function(arr) {                  
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    //check if there is nested array
    if (Array.isArray(arr[i])) {
      for (let y = 0; y < arr[i].length; y++) {
         //push the current element into resulting array
        result.push(arr[i][y]);                     
      }
    } else {
      result.push(arr[i]);
    }
  }
  // return the resulting array
  return result;                                   
};

//exporting the flatten function

module.exports = flatten;                                