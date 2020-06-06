import getTag from "../tools/getTag";
import isObjectLike from "./isObjectLike";

export default function isNumber(value) {
  return typeof value === "number" || (isObjectLike(value) && getTag(value) === "[object Number]");
}
