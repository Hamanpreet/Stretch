const maxProfit = function(prices) {
  let k = 0;
  for (let i = 0; i < prices.length; i ++) {
    for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] - prices[i] > k) {
          k = prices[j] - prices[i];
        }
      }  
    }
  return k;
};

console.log(maxProfit([7,1,5,3,6,4]));