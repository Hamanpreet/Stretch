const without = require("../without.js");
const assertArraysEqual = require("../assertArraysEqual.js");

const myInput = [1,2,3,4,5];
const itemsToRemove = [3,5];
const output = without(myInput, itemsToRemove);
assertArraysEqual(without(myInput,itemsToRemove), [1,2,4]);