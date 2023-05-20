const findKeyByValue = require("../findKeyByValue.js");
const assertEqual = require("../assertEqual.js");

const bestTVShowsByGenre = { sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//const results = findKeyByValue(bestTVShowsByGenre, "The W")
//console.log(results);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);