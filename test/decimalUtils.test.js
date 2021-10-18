const assert = require("assert");
const decimalUtils = require("../lib/decimalUtils");

describe("decimalUtils Unit Testing", () => {
  it("decimalUtils.add(0.1, 0.2) should return 0.3", () => {
    assert.equal(decimalUtils.add(0.1, 0.2), 0.3);
  });
  it("decimalUtils.sub(0.3, 0.1) should return 0.2", () => {
    assert.equal(decimalUtils.sub(0.3, 0.1), 0.2);
  });
  it("decimalUtils.mod(0.5, 0.2) should return 0.2", () => {
    assert.equal(decimalUtils.mod(0.5, 0.2), 0.1);
  });
  it("decimalUtils.times(5.7, 0.3) should return 1.71", () => {
    assert.equal(decimalUtils.times(5.7, 0.3), 1.71);
  });
  it("decimalUtils.div(6.2, 0.2) should return 31", () => {
    assert.equal(decimalUtils.div(6.2, 0.2), 31);
  });
});
