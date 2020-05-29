var assert = require("assert");
var { isUndefined } = require("../typeIs.cjs");

module.exports = () => {
  describe("isUndefined", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isUndefined(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return true", function () {
        assert.equal(isUndefined(), true);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isUndefined(100), false);
      });
    });

    describe("on String", function () {
      it("should return false", function () {
        assert.equal(isUndefined("foo"), false);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isUndefined(true), false);
      });
    });

    describe("on Array", function () {
      it("should return false", function () {
        assert.equal(isUndefined([1, 2, 3]), false);
      });
    });

    describe("on Plain Object", function () {
      it("should return false", function () {
        assert.equal(isUndefined({ a: 100, b: 200 }), false);
      });
    });

    describe("on Object.create({})", function () {
      it("should return false", function () {
        assert.equal(isUndefined(Object.create({})), false);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return false", function () {
        assert.equal(isUndefined(Object.create(null)), false);
      });
    });

    describe("on function", function () {
      it("should return false", function () {
        assert.equal(
          isUndefined(function () {
            return false;
          }),
          false
        );
      });
    });
  });
};
