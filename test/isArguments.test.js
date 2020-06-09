var assert = require("assert");
var { isArguments } = require("../typeIs.cjs");

module.exports = () => {
  describe("isArguments", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isArguments(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isArguments(), false);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isArguments(100), false);
      });
    });

    describe("on String", function () {
      it("should return false", function () {
        assert.equal(isArguments("foo"), false);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isArguments(true), false);
      });
    });

    describe("on Array", function () {
      it("should return false", function () {
        assert.equal(isArguments([1, 2, 3]), false);
      });
    });

    describe("on Plain Object", function () {
      it("should return false", function () {
        assert.equal(isArguments({ a: 100, b: 200 }), false);
      });
    });

    describe("on Object.create({})", function () {
      it("should return false", function () {
        assert.equal(isArguments(Object.create({})), false);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return false", function () {
        assert.equal(isArguments(Object.create(null)), false);
      });
    });

    describe("on function", function () {
      it("should return false", function () {
        assert.equal(
          isArguments(function () {
            return false;
          }),
          false
        );
      });
    });

    describe("on arguments (array like)", function () {
      it("should return true", function () {
        const args = arguments;
        assert.equal(isArguments(args), true);
      });
    });

    describe("on Symbol", function () {
      it("should return false", function () {
        assert.equal(isArguments(Symbol()), false);
      });
    });
  });
};
