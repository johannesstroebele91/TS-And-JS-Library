// TUPLE TYPE
const role: [number, string] = [1, "author"];
const namesList: string[] = ["lisa", "natalie"]; // similar to tuple
const mixedTypeValues: (string | boolean)[] = [
  "lisa",
  "eins",
  true,
  true,
  true,
  "lisa",
]; // can include multiple values of the specified stypes uses union type

namesList.push("petra");
// namesList.push(5) compile error due to wrong type
