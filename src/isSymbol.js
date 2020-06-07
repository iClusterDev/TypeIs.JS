import isObjectLike from "./isObjectLike";
import getTag from "../tools/getTag";

export default function isSymbol(value) {
  return typeof value === "symbol" || (isObjectLike(value) && getTag(value) == "[object Symbol]");
}
