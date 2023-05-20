const assertObjectsEqual = require("../assertObjectsEqual.js");
const multiColorShirtObject = { colors: ["red", "blue","green"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue","green"] };
assertObjectsEqual(multiColorShirtObject,anotherMultiColorShirtObject);

