var assert = require("assert");
var { isFunction } = require("../typeIs.cjs");

module.exports = () => {
  describe("isFunction", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isFunction(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isFunction(), false);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isFunction(100), false);
      });
    });

    describe("on String", function () {
      it("should return false", function () {
        assert.equal(isFunction("foo"), false);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isFunction(true), false);
      });
    });

    describe("on Array", function () {
      it("should return false", function () {
        assert.equal(isFunction([1, 2, 3]), false);
      });
    });

    describe("on Plain Object", function () {
      it("should return false", function () {
        assert.equal(isFunction({ a: 100, b: 200 }), false);
      });
    });

    describe("on Object.create({})", function () {
      it("should return false", function () {
        assert.equal(isFunction(Object.create({})), false);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return false", function () {
        assert.equal(isFunction(Object.create(null)), false);
      });
    });

    describe("on function", function () {
      it("should return true", function () {
        assert.equal(
          isFunction(function () {
            return false;
          }),
          true
        );
      });
    });
  });
};
