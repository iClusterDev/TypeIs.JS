var assert = require("assert");
var { isNull } = require("../typeIs.cjs");

module.exports = () => {
  describe("isNull", function () {
    describe("on null", function () {
      it("should return true", function () {
        assert.equal(isNull(null), true);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isNull(), false);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isNull(100), false);
      });
    });

    describe("on String", function () {
      it("should return false", function () {
        assert.equal(isNull("foo"), false);
      });
    });

    describe("on Boolean", function () {
      it("should return false", function () {
        assert.equal(isNull(true), false);
      });
    });

    describe("on Array", function () {
      it("should return false", function () {
        assert.equal(isNull([1, 2, 3]), false);
      });
    });

    describe("on Plain Object", function () {
      it("should return false", function () {
        assert.equal(isNull({ a: 100, b: 200 }), false);
      });
    });

    describe("on Object.create({})", function () {
      it("should return false", function () {
        assert.equal(isNull(Object.create({})), false);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return false", function () {
        assert.equal(isNull(Object.create(null)), false);
      });
    });

    describe("on function", function () {
      it("should return false", function () {
        assert.equal(
          isNull(function () {
            return false;
          }),
          false
        );
      });
    });
  });
};
