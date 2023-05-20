function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  let i = 0;
  return function() {
    /* your code here */
    const results = list[i];
    i++;
    return results;
    
  
  }
  
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6



const countdownGenerator = function (x) {
  /* your code here */
    const arr = [`T-minus 3...`, `T-minus 2...`, `T-minus 1...`,"Blast off!!",];
    let i = 0;
  
    return function() {
      let results = arr[i];
      if (x < 0) {
        results = "Rockets already gone, bub!";
      }
      i ++;
      x --;
      return console.log(results);
    }

};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
countdown();

