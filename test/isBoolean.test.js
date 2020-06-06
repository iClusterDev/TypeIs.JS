var assert = require("assert");
var { isBoolean } = require("../typeIs.cjs");

module.exports = () => {
  describe("isBoolean", function () {
    describe("on null", function () {
      it("should return false", function () {
        assert.equal(isBoolean(null), false);
      });
    });

    describe("on undefined", function () {
      it("should return false", function () {
        assert.equal(isBoolean(), false);
      });
    });

    describe("on Number", function () {
      it("should return false", function () {
        assert.equal(isBoolean(100), false);
      });
    });

    describe("on String", function () {
      it("should return false", function () {
        assert.equal(isBoolean("foo"), false);
      });
    });

    describe("on Boolean", function () {
      it("should return true", function () {
        assert.equal(isBoolean(true), true);
      });
    });

    describe("on Array", function () {
      it("should return false", function () {
        assert.equal(isBoolean([1, 2, 3]), false);
      });
    });

    describe("on Plain Object", function () {
      it("should return false", function () {
        assert.equal(isBoolean({ a: 100, b: 200 }), false);
      });
    });

    describe("on Object.create({})", function () {
      it("should return false", function () {
        assert.equal(isBoolean(Object.create({})), false);
      });
    });

    describe("on Object.create(null)", function () {
      it("should return false", function () {
        assert.equal(isBoolean(Object.create(null)), false);
      });
    });

    describe("on function", function () {
      it("should return false", function () {
        assert.equal(
          isBoolean(function () {
            return false;
          }),
          false
        );
      });
    });

    describe("on arguments (array like)", function () {
      it("should return false", function () {
        const args = arguments;
        assert.equal(isBoolean(args), false);
      });
    });
  });
};
