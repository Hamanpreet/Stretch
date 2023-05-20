const assertArraysEqual = require("../assertArraysEqual.js");
const map = require("../map.js");

const words = ["ground", "control", "to", "major", "tom"];
const results2 = map(words, word => word[0]);
//console.log(results2);
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']);
