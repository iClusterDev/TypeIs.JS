import isObjectLike from "./isObjectLike";
import isFunction from "./isFunction";

export default function isObject(value) {
  return isObjectLike(value) || isFunction(value);
}
