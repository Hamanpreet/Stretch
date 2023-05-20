// importing the eqArrays function

const eqArrays = require("./eqArrays.js");      
const assertArraysEqual = function(arr1, arr2) {

 //Comparing arrays using eqArrays

  if (eqArrays(arr1, arr2))                      
    console.log(`Assertion passed ${arr1} === ${arr2}`);
  else
    console.log(`Assertion failed ${arr1} !== ${arr2}`);
};

// exporting the function so that it can be used by the user.

module.exports = assertArraysEqual;                 