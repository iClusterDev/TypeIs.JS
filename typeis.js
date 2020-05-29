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

function isObject(value) {
  var type = _typeof(value);

  return (type === "object" || type === "function") && value !== null;
}

function isObjectObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

function isPlainObject(value) {
  if (!isObject(value)) return false;
  if (!isObjectObject(value)) return false;
  var ctor = value.constructor;
  if (typeof ctor !== "function") return false;
  var prot = ctor.prototype;
  if (!isObjectObject(prot)) return false;
  if (!prot.hasOwnProperty("isPrototypeOf")) return false;
  return true;
}

var index = {
  isUndefined: isUndefined,
  isNull: isNull,
  isObject: isObject,
  isPlainObject: isPlainObject
};

export default index;
