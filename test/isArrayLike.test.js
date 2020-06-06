var assert = require("assert");
var { isArrayLike } = require("../typeIs.cjs");

module.exports = () => {
  describe("isArrayLike", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isArrayLike(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isArrayLike(), false);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isArrayLike(100), false);
      });
    });

    describe("on String", function () {
      it("should return true", function () {
        assert.equal(isArrayLike("foo"), true);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isArrayLike(true), false);
      });
    });

    describe("on Array", function () {
      it("should return true", function () {
        assert.equal(isArrayLike([1, 2, 3]), true);
      });
    });

    describe("on Plain Object", function () {
      it("should return false", function () {
        assert.equal(isArrayLike({ a: 100, b: 200 }), false);
      });
    });

    describe("on Object.create({})", function () {
      it("should return false", function () {
        assert.equal(isArrayLike(Object.create({})), false);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return false", function () {
        assert.equal(isArrayLike(Object.create(null)), false);
      });
    });

    describe("on function", function () {
      it("should return false", function () {
        assert.equal(
          isArrayLike(function () {
            return false;
          }),
          false
        );
      });
    });

    describe("on arguments (array like)", function () {
      it("should return true", function () {
        const args = arguments;
        assert.equal(isArrayLike(args), true);
      });
    });
  });
};
