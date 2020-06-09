function isUndefined(value) {
  return typeof value === "undefined";
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function isNull(value) {
  return !value && _typeof(value) === "object";
}

function isFunction(value) {
  return typeof value === "function";
}

function isObjectLike(value) {
  return _typeof(value) === "object" && value !== null;
}

function isObject(value) {
  return isObjectLike(value) || isFunction(value);
}

function getTag(value) {
  return Object.prototype.toString.call(value);
}

// no need for this one use getTag directly below

function isObjectObject(value) {
  return getTag(value) === "[object Object]";
}

function isPlainObject(value) {
  if (!isObject(value)) return false;
  if (!isObjectObject(value)) return false; // FIXME
  // refactor this using isFunction

  var ctor = value.constructor;
  if (typeof ctor !== "function") return false;
  var prot = ctor.prototype;
  if (!isObjectObject(prot)) return false;
  if (!prot.hasOwnProperty("isPrototypeOf")) return false;
  return true;
}

var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value === "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

function hasLenght(value) {
  if (!isNull(value) && !isUndefined(value)) {
    var length = value.length;
    return isLength(length);
  } else {
    return false;
  }
}

function isArrayLike(value) {
  return !isNull(value) && !isFunction(value) && hasLenght(value);
}

function isArray(value) {
  return Array.isArray(value);
}

function isString(value) {
  return typeof value === "string" || isObjectLike(value) && !isArray(value) && getTag(value) == "[object String]";
}

function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}

function isNumber(value) {
  return typeof value === "number" || isObjectLike(value) && getTag(value) === "[object Number]";
}

function isSymbol(value) {
  return _typeof(value) === "symbol" || isObjectLike(value) && getTag(value) == "[object Symbol]";
}

function isArguments(value) {
  return isArrayLike(value) && getTag(value) === "[object Arguments]";
}

var index = {
  isUndefined: isUndefined,
  isNull: isNull,
  isObject: isObject,
  isFunction: isFunction,
  isObjectLike: isObjectLike,
  isPlainObject: isPlainObject,
  isArrayLike: isArrayLike,
  isArray: isArray,
  isString: isString,
  isBoolean: isBoolean,
  isNumber: isNumber,
  isSymbol: isSymbol,
  isArguments: isArguments
};

export default index;
