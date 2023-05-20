//This function returns the all the elements except the first element of array

const tail = function(arr) {
  const newArr = [];             
  if (arr.length === 0) {
    //returns undefined if the array is empty
    return undefined;                            
  }
 
  for (let i = 1; i < arr.length; i++) {
    //pushes all the elements except the first element
    newArr.push(arr[i]);
  }
  return newArr;
};

// exporting the tail function

module.exports = tail;                             