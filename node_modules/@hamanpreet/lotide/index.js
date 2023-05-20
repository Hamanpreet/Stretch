
  // This is a collection of all the functions of lotide. 

const head   = require('./head');                                 
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual   = require('./assertArraysEqual');
const assertEqual   = require('./assertEqual');
const assertObjectsEqual   = require('./assertObjectsEqual');
const countLetters   = require('./countLetters');
const countOnly   = require('./countOnly');
const eqArrays   = require('./eqArrays');
const eqObjects   = require('./eqObjects');
const findKeyByValue   = require('./findKeyByValue');
const letterPositions   = require('./letterPositions');
const map   = require('./map');
const takeUntil   = require('./takeUntil');
const without   = require('./without');
const flatten = require("./flatten.js");
const findKey = require("./findKey1.js");

 // Exporting all the functions together using new syntax

module.exports = {                                                 
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without,
  flatten,
  findKey
};