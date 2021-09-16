let someArray: number[] = [3, 6, 3, 4, 5];

// 1) for loop
console.log("\nfor loop");
for (let i = 0; i < someArray.length; i++) {
  console.log(i); // OUTPUT: 1,2,3,4,5
}

console.log("\nfor loop");
for (let i = 0; i < someArray.length; ++i) {
  console.log(i); // OUTPUT: 1,2,3,4,5
}

// 2) for..in loop
// Difference to for..of:
// Prints the INDEXES of the array, NOT the values
// for..in iterates over all enumerable property keys of an "object"
console.log("\nfor..in loop");
// elKey are the property keys
for (let elKey in someArray) {
  console.log(elKey);
}

// 3) for..of loop
// Difference to for..in
// Prints the VALUES of the array, NOT the indexes
// for..of iterates over the values of an iterable object
// Examples of iterable objects are arrays, strings, and NodeLists.
console.log("\nfor..of loop");
// elValue are the property values
for (let elValue of someArray) {
  console.log(elValue);
}

// 4) while loop
console.log("\nwhile loop");
let i: number = 0;
while (i < 4) {
  console.log(i);
  i++;
}

// 5) do..while loop
console.log("\ndo..while loop");
i = 0;
do {
  console.log("Index: " + i);
  i++;
} while (i < 4);

/* 6) switch..case
* Respective statement gets executed
* if the case () expression
* is EQUAL to the switch () expression

IMPORTANT!
* break (needed to break out of function)
* default (needed for edge cases) */
console.log("\nswitch..case");
let grade = "B";
switch (grade) {
  case "A": {
    console.log("A");
    break;
  }
  default: {
    console.log("Invalid choice");
    break;
  }
}
