//function returns all the items except the itemsToRemove

const without = function(source, itemsToRemove) {
  const newArr = [];
  for (let i  = 0; i < source.length; i++) {  
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);                            
    }
  }
  //returns the newArr at the end
  return newArr;                               
};

// exports the without function

module.exports = without;                      