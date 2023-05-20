const assertEqual = require("../assertEqual.js");
const eqArrays = require("../eqArrays.js");
assertEqual(eqArrays([1, 3, 4], [4, 3, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);


