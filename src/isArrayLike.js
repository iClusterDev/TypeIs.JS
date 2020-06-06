import isNull from "./isNull";
import isFunction from "./isFunction";
import hasLength from "../tools/hasLength";

export default function isArrayLike(value) {
  return !isNull(value) && !isFunction(value) && hasLength(value);
}
