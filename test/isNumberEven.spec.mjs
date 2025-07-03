import NumbersValidator from "../app/numbers_validator.mjs";
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
  it("should return false if number is odd", function () {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
  it("chai test", function () {
    expect(5).to.be.below(56);
  });
  it("chai test", function () {
    expect({ a: "apple", b: 43 }).to.be.eql({ a: "apple", b: 43 });
  });
});
