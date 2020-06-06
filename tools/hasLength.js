import isUndefined from "../src/isUndefined";
import isNull from "../src/isNull";
import isLength from "./isLength";

export default function hasLenght(value) {
  if (!isNull(value) && !isUndefined(value)) {
    const { length } = value;
    return isLength(length);
  } else {
    return false;
  }
}
