export default function isNull(value) {
  return !value && typeof value === "object";
}
