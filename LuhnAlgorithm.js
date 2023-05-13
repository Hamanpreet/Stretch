const helper = function(arr) {
  for (let i = (arr.length - 1); i >= 0; i = i - 2) {
    //console.log(arr[i], i);
      arr[i] = arr[i] * 2;
    if (Number.isInteger(arr[i])) {
      const a = Math.floor(arr[i] / 10);
      const b = arr[i] % 10;
      arr[i] = a + b;
    }
  }
  return arr;
}

const check = function(number) {
  let sum = 0;
  const unchecked = Math.floor(number / 10);
  
  const str = unchecked.toString();
  const arr = str.split("");
  //console.log(arr.length);
  let arr2 = helper(arr);
  for (let item of arr2) {
    item = item * 1;
    sum += item;
  }
  const digit = 10 - (sum % 10);
  return digit;
};
console.log(check(79927398713));


