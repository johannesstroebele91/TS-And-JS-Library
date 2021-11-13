// UNION TYPE
type User = { name: string } | string; // combinations are possible also between objects and strings
let u1: User = { name: "Max" };
u1 = "Michael";

function combine(value1: string | number, value2: string | number) {
  if (typeof value1 === "number" && typeof value2 === "number") {
    return value1 + value2;
  }
  if (typeof value1 === "string" && typeof value2 === "string") {
    return value1 + " " + value2;
  }
  throw new Error();
}

console.log(combine("hello", "world"));
console.log(typeof combine("hello", "world") === "string"); // actually returns a string
console.log(combine(234123.2, 43));
console.log(typeof combine(234123.2, 43) === "string"); // actually returns a number
console.log(combine(234123.2, 43));
console.log(combine(64.2, "412"));
