// const middle = require("../middle.js");
// const assertArraysEqual = require("../assertArraysEqual.js");

// const myInput = [1,2,3,4,5];
// assertArraysEqual(middle(myInput), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);


const assert = require("chai").assert;
const middle = require("../middle.js");

describe ("#middle", () => {
  it ("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it ("returns undefined for []", () => {
    assert.deepEqual(middle([]), undefined);
  });

  it ("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4])
  });
});