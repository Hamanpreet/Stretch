const countLetters = require("../countLetters.js");
const assertEqual = require("../assertEqual.js");

//console.log(countLetters("lighthouse in the house"));
const results = countLetters("lighthouse in the house");
assertEqual(results["o"], 2);
assertEqual(results["l"], 1);