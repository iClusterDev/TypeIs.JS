var assert = require("assert");
var { isNumber } = require("../typeIs.cjs");

module.exports = () => {
  describe("isNumber", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isNumber(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isNumber(), false);
      });
    });

    describe("on Number", function () {
      it("should return true", function () {
        assert.equal(isNumber(100), true);
      });
    });

    describe("on String", function () {
      it("should return false", function () {
        assert.equal(isNumber("foo"), false);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isNumber(true), false);
      });
    });

    describe("on Array", function () {
      it("should return false", function () {
        assert.equal(isNumber([1, 2, 3]), false);
      });
    });

    describe("on Plain Object", function () {
      it("should return false", function () {
        assert.equal(isNumber({ a: 100, b: 200 }), false);
      });
    });

    describe("on Object.create({})", function () {
      it("should return false", function () {
        assert.equal(isNumber(Object.create({})), false);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return false", function () {
        assert.equal(isNumber(Object.create(null)), false);
      });
    });

    describe("on function", function () {
      it("should return false", function () {
        assert.equal(
          isNumber(function () {
            return false;
          }),
          false
        );
      });
    });

    describe("on arguments (array like)", function () {
      it("should return false", function () {
        const args = arguments;
        assert.equal(isNumber(args), false);
      });
    });

    describe("on Symbol", function () {
      it("should return false", function () {
        assert.equal(isNumber(Symbol()), false);
      });
    });
  });
};
