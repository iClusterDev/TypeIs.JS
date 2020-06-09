import getTag from "../tools/getTag";
import isArrayLike from "./isArrayLike";

export default function isArguments(value) {
  return isArrayLike(value) && getTag(value) === "[object Arguments]";
}
