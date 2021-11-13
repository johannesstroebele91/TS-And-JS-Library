// ARRAY TYPE
// Normales arrays
const names: string[] = ["lisa", "natalie"]; // Infers array of string, `const names =` would be also possible

// prints values of array // infers strings array correctly
for (const value of names) {
  console.log(value.toUpperCase());
  // console.log(value.map()); // map does not exist on "1" value, but only on the whole array, therefore compile error!
}

// Mixed arrays
const mixedTypeValues: (string | boolean)[] = [
  "lisa",
  "eins",
  true,
  true,
  true,
  "lisa",
]; // can include multiple values of the specified stypes uses union type

// prints values of array // infers any because mixed types here
for (const value of mixedTypeValues) {
  console.log(value);
}

// prints indexes of array
for (const index in mixedTypeValues) {
  console.log(index);
}
