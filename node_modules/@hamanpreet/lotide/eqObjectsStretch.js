//importing eqArrays function

const eqArrays = require("../lotide/eqArrays.js");          

// This was a stretch exercise to use recursion to check equality of nested objects

const eqObjects = function(object1, object2) {                        
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
      return eqArrays(object1[key1], object2[key1]);
    } else if (typeof object1[key1] === "object" && typeof object2[key1] === "object") {      
      //if the values are objects, call this function again, returns true if equal
      if (!eqObjects(object1[key1], object2[key1])) {
        return false;
      } else if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
  }
  return true;
};


// exporting the eqObjects function


module.exports = eqObjects;