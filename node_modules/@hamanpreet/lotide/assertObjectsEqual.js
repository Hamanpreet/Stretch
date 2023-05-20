 // importing the eqObjects function  

const eqObjects = require("./eqObjects.js");                               
const assertObjectsEqual = function(object1, object2) {     
  
  // importing the inspect function for objects

  const inspect = require('util').inspect;                     
  if (eqObjects(object1, object2))
    console.log(`😁Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  else
    console.log(`😒Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

// exporting the assertObjectsEqual function

module.exports = assertObjectsEqual;                                    