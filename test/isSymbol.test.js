var assert = require("assert");
var { isSymbol } = require("../typeIs.cjs");

module.exports = () => {
  describe("isSymbol", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isSymbol(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isSymbol(), false);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isSymbol(100), false);
      });
    });

    describe("on String", function () {
      it("should return false", function () {
        assert.equal(isSymbol("foo"), false);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isSymbol(true), false);
      });
    });

    describe("on Array", function () {
      it("should return false", function () {
        assert.equal(isSymbol([1, 2, 3]), false);
      });
    });

    describe("on Plain Object", function () {
      it("should return false", function () {
        assert.equal(isSymbol({ a: 100, b: 200 }), false);
      });
    });

    describe("on Object.create({})", function () {
      it("should return false", function () {
        assert.equal(isSymbol(Object.create({})), false);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return false", function () {
        assert.equal(isSymbol(Object.create(null)), false);
      });
    });

    describe("on function", function () {
      it("should return false", function () {
        assert.equal(
          isSymbol(function () {
            return false;
          }),
          false
        );
      });
    });

    describe("on arguments (array like)", function () {
      it("should return false", function () {
        const args = arguments;
        assert.equal(isSymbol(args), false);
      });
    });

    describe("on Symbol", function () {
      it("should return true", function () {
        assert.equal(isSymbol(Symbol()), true);
      });
    });
  });
};
