const eqArrays = require("./eqArrays.js");                    // exporting the assertObjectsEqual function

const eqObjects = function(object1, object2) {

//arrays of all the keys in objects

  const keys1 = Object.keys(object1);                
  const keys2 = Object.keys(object2);

  //if the keys length are not equal, return false
  
  if (keys1.length !== keys2.length) {                
    return false;
  }

//loop over keys2 to check if keys1 includes that element, return false, if doesn't include

  for (const key of keys2) {                           
    if (!(keys1.includes(key))) {                      
      return false;
    }
  }
  for (let key1 in object1) {
    //checking if values are arrays
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {  
      // calling eqArrays function to check equality
      return eqArrays(object1[key1], object2[key1]);    
    } else if (typeof object1[key1] === typeof object2[key1]) {   
      // if type of the values are equal, return true if they are strict equal
      return object1[key1] === object2[key1];
    } else {
      //otherwise return false
      return false;                                                                
    }
  }
};

  // exporting the eqObjects function

module.exports = eqObjects;                                      