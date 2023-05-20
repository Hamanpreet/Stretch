//This function when given an array and an object. It will return an object containing counts of everything that the input object listed.

const countOnly = function(allItems, itemsToCount) {      
  const results = {};

  //looping over the elements of allItems to filter the elements using if statement 

  for (const item of allItems) {                         
    if (itemsToCount[item]) {
      if (results[item]) {   
        //if the results object already has that specific letter key in it, add 1                             
        results[item] += 1;
      } else {
        // if the key doesn't exist, make the key and set its value to 1
        results[item] = 1;                                 
      }
    }
  }
  // return the resulting results object
  return results;                                            
};

// exporting the countOnly function

module.exports = countOnly;                                  