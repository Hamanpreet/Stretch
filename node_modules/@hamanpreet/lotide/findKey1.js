 // importing the assertEqual function  
   
const findKey = function(myObj, callback) {
  for (let key in myObj) {
    
     //When callback condition is met, return specific key

    if(callback(myObj[key])) {
      return key;
    }
  }
}

//exporting the findKey function

module.exports = findKey;
