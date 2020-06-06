var assert = require("assert");
var { isString } = require("../typeIs.cjs");

module.exports = () => {
  describe("isString", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isString(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isString(), false);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isString(100), false);
      });
    });

    describe("on String", function () {
      it("should return true", function () {
        assert.equal(isString("foo"), true);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isString(true), false);
      });
    });

    describe("on Array", function () {
      it("should return false", function () {
        assert.equal(isString([1, 2, 3]), false);
      });
    });

    describe("on Plain Object", function () {
      it("should return false", function () {
        assert.equal(isString({ a: 100, b: 200 }), false);
      });
    });

    describe("on Object.create({})", function () {
      it("should return false", function () {
        assert.equal(isString(Object.create({})), false);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return false", function () {
        assert.equal(isString(Object.create(null)), false);
      });
    });

    describe("on function", function () {
      it("should return false", function () {
        assert.equal(
          isString(function () {
            return false;
          }),
          false
        );
      });
    });

    describe("on arguments (array like)", function () {
      it("should return false", function () {
        const args = arguments;
        assert.equal(isString(args), false);
      });
    });
  });
};
