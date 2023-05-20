const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
const calculateTax = function (item, sum) {
  let tax = 0;
  
  if (item.province === "AB") {
   tax = sum * 0.05;
  }
  if (item.province === "BC") {
    tax = sum * 0.12;
  }
   if (item.province === "SK") {
    tax = sum * 0.10;
  }
  return tax;
};

const calculateSalesTax = function(salesData, taxRates) {
  const results = {};
  
  for (const item of companySalesData) {
    console.log(item.name);
    let company = item.name;
    if(!results[company]) {
      results[company] = {
      totalSales : 0,
      totalTax : 0
    }
  }; 

  const arr = item.sales;
  let sum = arr.reduce((total,item) => total + item);
  console.log(sum);
     
  results[company].totalSales += sum;
  const tax = calculateTax(item,sum);
  results[company].totalTax += tax;
  }
  return results;
};

const results = calculateSalesTax(companySalesData,salesTaxRates);
console.log(results);
