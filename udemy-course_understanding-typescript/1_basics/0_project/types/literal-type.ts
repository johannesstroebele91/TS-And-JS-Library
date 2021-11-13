// LITERAL TYPE
// Only allow certain values of a certain type
// e.g. resultConversion: "as-number" | "as-text"

function combine(
  value1: number | string,
  value2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let results;
  if (
    (typeof value1 === "number" && typeof value2 === "number") ||
    resultConversion === "as-number"
  ) {
    return +value1 + +value2;
  } else {
    results = value1.toString() + value2.toString();
  }
}

console.log(combine(23.2, 43, "as-number"));
console.log(combine("hello", "world", "as-text"));
