//This function returns middle element of an array 

const middle = function(arr) {                              
  if (arr.length === 0) {
    return undefined;
  }
  const result = [];
  let element = 0;
  if ((arr.length % 2) === 0) {
    element = arr.length / 2;
    //returns two elements for even length
    result.push(arr[element - 1]);                          
    result.push(arr[element]);
  } else {
    element = Math.floor(arr.length / 2);
    //returns one element for odd length
    result.push(arr[element]);                               
  }
  return result; 
};

//exporting the middle function

module.exports = middle;                                      

