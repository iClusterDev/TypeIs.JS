import isFunction from "./isFunction";
import isObjectLike from "./isObjectLike";

export default function isObject(value) {
  return isObjectLike(value) || isFunction(value);
}
