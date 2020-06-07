var assert = require("assert");
var { isObject } = require("../typeIs.cjs");

module.exports = () => {
  describe("isObject", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isObject(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isObject(), false);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isObject(100), false);
      });
    });

    describe("on String", function () {
      it("should return false", function () {
        assert.equal(isObject("foo"), false);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isObject(true), false);
      });
    });

    describe("on Array", function () {
      it("should return true", function () {
        assert.equal(isObject([1, 2, 3]), true);
      });
    });

    describe("on Plain Object", function () {
      it("should return true", function () {
        assert.equal(isObject({ a: 100, b: 200 }), true);
      });
    });

    describe("on Object.create({})", function () {
      it("should return true", function () {
        assert.equal(isObject(Object.create({})), true);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return true", function () {
        assert.equal(isObject(Object.create(null)), true);
      });
    });

    describe("on function", function () {
      it("should return true", function () {
        assert.equal(
          isObject(function () {
            return true;
          }),
          true
        );
      });
    });

    describe("on arguments (array like)", function () {
      it("should return true", function () {
        const args = arguments;
        assert.equal(isObject(args), true);
      });
    });

    describe("on Symbol", function () {
      it("should return false", function () {
        assert.equal(isObject(Symbol()), false);
      });
    });
  });
};
