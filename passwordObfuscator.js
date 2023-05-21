const userInput = process.argv.slice(2, 3);                //getting the user input

const array = userInput[0].split("");                          //separating characters
const obfuscate = (str) => {
  for (let i in array) {
    
   //console.log(letter);
    if (array[i] === str) {                              //check if character is equal
      array[i] = "4";
    }
    if (array[i] === str) {
      array[i] = "3";
    }
    if (array[i] === str) {
      array[i] = "0";
    }
    if (array[i] === str) {
      array[i] = "1";
    }
  }
  let results = array.join("");                        //joining characters again
  return results;
};
//str is the one we are replacing our characters with
console.log(obfuscate("a"));                          