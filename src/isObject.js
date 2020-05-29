export default function isObject(value) {
  const type = typeof value;
  return (type === "object" || type === "function") && value !== null;
}
