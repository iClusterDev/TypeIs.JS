var assert = require("assert");
var { isObjectLike } = require("../typeIs.cjs");

module.exports = () => {
  describe("isObjectLike", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isObjectLike(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isObjectLike(), false);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isObjectLike(100), false);
      });
    });

    describe("on String", function () {
      it("should return false", function () {
        assert.equal(isObjectLike("foo"), false);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isObjectLike(true), false);
      });
    });

    describe("on Array", function () {
      it("should return true", function () {
        assert.equal(isObjectLike([1, 2, 3]), true);
      });
    });

    describe("on Plain Object", function () {
      it("should return true", function () {
        assert.equal(isObjectLike({ a: 100, b: 200 }), true);
      });
    });

    describe("on Object.create({})", function () {
      it("should return true", function () {
        assert.equal(isObjectLike(Object.create({})), true);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return true", function () {
        assert.equal(isObjectLike(Object.create(null)), true);
      });
    });

    describe("on function", function () {
      it("should return false", function () {
        assert.equal(
          isObjectLike(function () {
            return true;
          }),
          false
        );
      });
    });

    describe("on arguments (array like)", function () {
      it("should return true", function () {
        const args = arguments;
        assert.equal(isObjectLike(args), true);
      });
    });

    describe("on Symbol", function () {
      it("should return false", function () {
        assert.equal(isObjectLike(Symbol()), false);
      });
    });
  });
};
