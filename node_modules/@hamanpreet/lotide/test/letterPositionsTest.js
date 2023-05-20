const assertArraysEqual = require("../assertArraysEqual.js");
const letterPositions = require("../letterPositions.js");
const results = letterPositions("hello world");


assertArraysEqual(results.h, [0]);
assertArraysEqual(results["l"], [2,3]);
