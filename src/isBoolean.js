import getTag from "../tools/getTag";
import isObjectLike from "./isObjectLike";

export default function isBoolean(value) {
  return value === true || value === false || (isObjectLike(value) && getTag(value) == "[object Boolean]");
}
