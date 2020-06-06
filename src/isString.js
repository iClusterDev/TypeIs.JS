import isObjectLike from "./isObjectLike";
import isArray from "./isArray";
import getTag from "../tools/getTag";

export default function isString(value) {
  return typeof value === "string" || (isObjectLike(value) && !isArray(value) && getTag(value) == "[object String]");
}
