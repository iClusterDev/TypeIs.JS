export default function isObjectLike(value) {
  const type = typeof value;
  return type === "object" && value !== null;
}
