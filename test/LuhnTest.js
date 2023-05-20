const assert = require("chai").assert;
const check = require("../LuhnAlgorithm.js");

describe("The Checks", () => {
  it ("returns 3 for input", () => {
    assert.strictEqual(check(79927398713), 3);
  });
});