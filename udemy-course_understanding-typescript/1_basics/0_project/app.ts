// TYPE Aliases (Custom Type)
// Generic types
type NumOrStr = number | string;
type conversionLiteral = "as-number" | "as-text";

function combine(
  value1: NumOrStr,
  value2: NumOrStr,
  resultConversion: conversionLiteral
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

// Object
type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
