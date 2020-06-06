const isNull = require("./isNull.test");
const isUndefined = require("./isUndefined.test");
const isObjectTest = require("./isObject.test");
const isFunctionTest = require("./isFunction.test");
const isObjectLikeTest = require("./isObjectLike.test");
const isPlainObjectTest = require("./isPlainObject.test");

isNull();
isUndefined();
isObjectTest();
isFunctionTest();
isObjectLikeTest();
isPlainObjectTest();

// const func1 = () => {};
// const func2 = function () {};
// console.log(typeof func1);
// console.log(typeof func2);

const str = "fabio";
console.log(Object.prototype.toString.call(str));
