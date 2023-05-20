// const assertEqual = require("../assertEqual.js");
// const tail = require("../tail.js");
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
// const result2 = tail([]);
// assertEqual(result2[0], undefined);


const assert = require("chai").assert;
const tail = require("../tail.js");

describe ("#tail", () => {
  it ("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it ("returns undefined for []", () => {
    assert.deepEqual(tail([]), undefined);
  });

  it ("returns ['world'] for ['hello', 'world']", () => {
    assert.deepEqual(tail(['hello', 'world']), ['world'])
  });
});