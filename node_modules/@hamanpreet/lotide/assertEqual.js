//function checks if two parameters are equal or not

const assertEqual = function(actual, expected) {                         
  if (actual === expected)
    console.log(`😁Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`😒Assertion Failed: ${actual} !== ${expected}`);
};

// exporting the function so that it can be used by the user.

module.exports = assertEqual;                                         
