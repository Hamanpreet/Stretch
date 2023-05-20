//Function returns a "slice of the array with elements taken from the beginning.",keeps going until the callback returns a truthy value.

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!(callback(item))) {

      //pushes elements one by one till callback condition is met
      results.push(item);                
    } else {
      return results;
    }
  }
  //return results at the end
  return results;                          
};

 //exporting takeUntil function

module.exports = takeUntil;      