let fact = 0;
const factorial = function(n) {
  
  if (n === 1) {
    return 1;
    console.log("A");
  }
  fact = n * factorial(n - 1);
  return fact;
};
console.log(factorial(5));