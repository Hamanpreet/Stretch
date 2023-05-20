//This function returns value of key which matches the value argument

const findKeyByValue = function(myObj, myValue) {            

  //looping over myObj object that returns key, when the value is equal to given value
  for (const k in myObj) {                                   
    if (myObj[k] === myValue) {
      return k;
    }
  }
  return undefined;                                             
};

// exporting the findKeyByValue function

module.exports = findKeyByValue;                               