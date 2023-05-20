const eqObjects = require("../eqObjects.js");
const assertEqual = require("../assertEqual.js");
const shirtObject = { size: "medium", color: "red" };
const anotherShirtObject = { size: "medium", color: "red" };
const results = eqObjects(shirtObject , anotherShirtObject);
//console.log(results);
assertEqual(results, true);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const results2 = eqObjects(shirtObject , longSleeveShirtObject);
//console.log(results2);
assertEqual(results2, false);

const multiColorShirtObject = { colors: ["red", "blue","green"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue","green"] };
const results1 = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject);
//console.log(results);
assertEqual(results1, false);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const results3 = eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject);
assertEqual(results3, false);