import isObject from "./isObject";

function isObjectObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

export default function isPlainObject(value) {
  if (!isObject(value)) return false;

  if (!isObjectObject(value)) return false;

  const ctor = value.constructor;
  if (typeof ctor !== "function") return false;

  const prot = ctor.prototype;
  if (!isObjectObject(prot)) return false;

  if (!prot.hasOwnProperty("isPrototypeOf")) return false;

  return true;
}
