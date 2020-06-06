var assert = require("assert");
var { isArray } = require("../typeIs.cjs");

module.exports = () => {
  describe("isArray", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isArray(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isArray(), false);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isArray(100), false);
      });
    });

    describe("on String", function () {
      it("should return false", function () {
        assert.equal(isArray("foo"), false);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isArray(true), false);
      });
    });

    describe("on Array", function () {
      it("should return true", function () {
        assert.equal(isArray([1, 2, 3]), true);
      });
    });

    describe("on Plain Object", function () {
      it("should return false", function () {
        assert.equal(isArray({ a: 100, b: 200 }), false);
      });
    });

    describe("on Object.create({})", function () {
      it("should return false", function () {
        assert.equal(isArray(Object.create({})), false);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return false", function () {
        assert.equal(isArray(Object.create(null)), false);
      });
    });

    describe("on function", function () {
      it("should return false", function () {
        assert.equal(
          isArray(function () {
            return false;
          }),
          false
        );
      });
    });

    describe("on arguments (array like)", function () {
      it("should return false", function () {
        const args = arguments;
        assert.equal(isArray(args), false);
      });
    });
  });
};
