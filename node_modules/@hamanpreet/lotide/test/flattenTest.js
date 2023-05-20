const flatten = require("../flatten.js");
const assertArraysEqual = require("../assertArraysEqual.js");


const arr = [1,2,[3, 4],5,[6]];

assertArraysEqual(flatten(arr),[1,2,3,4,5,6]);
