const NumbersValidator = require("../../app/numbers_validator");
import { expect } from "chai";

describe("isNumberEven positive scenaries", function () {
  let validator;
  beforeEach(function () {
    validator = new NumbersValidator();
  });
  afterEach(function () {
    validator = null;
  });
  it("should return true if number is even", function () {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
});
