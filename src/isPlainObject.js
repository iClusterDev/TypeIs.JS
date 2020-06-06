import getTag from "../tools/getTag";
import isObject from "./isObject";

// FIXME
// no need for this one use getTag directly below
function isObjectObject(value) {
  return getTag(value) === "[object Object]";
}

export default function isPlainObject(value) {
  if (!isObject(value)) return false;

  if (!isObjectObject(value)) return false;

  // FIXME
  // refactor this using isFunction
  const ctor = value.constructor;
  if (typeof ctor !== "function") return false;

  const prot = ctor.prototype;
  if (!isObjectObject(prot)) return false;

  if (!prot.hasOwnProperty("isPrototypeOf")) return false;

  return true;
}
