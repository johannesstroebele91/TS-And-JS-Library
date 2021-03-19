// Normally, it goes like this:
// "OR" if 1 of the conditions is true, returns true
// "AND" if al of the conditions is true, returns true
// HOWEVER: FOR JS IT IS DIFFERENT!!!

// A) EXAMPLES

// Given that x = 5,
var x = 5

// EQUAL TO
if (x == 8) {
} // OUTPUT: false
if (x == 5) {
} // OUTPUT: true
if (x == "5") {
} // OUTPUT WARNING: true

// EQUAL TO AND EQUAL TYPE
if (x === 5) {
} // OUTPUT: true

// NOT EQUAL
if (x != 8) {
} // OUTPUT: true

// NOT EQUAL OR NOT EQUAL TYPE
if (x !== 5) {
} // OUTPUT: false
if (x !== "5") {
} // OUTPUT: true
if (x !== 8) {
} // OUTPUT: true


// B) EXAMPLES
// All true and false numbers are listed below
// TRUE VALUES
if (true) {
}
if ({}) {
}
if ([]) {
}
if ("0") {
}
if ("false") {
}
if (new Date()) {
}
if (Infinity) {
}
if (-Infinity) {
}
if (1 || 2 || 3) {
} // all non zero numbers
if (2) {
}

// FALSE VALUES
if (false) {
}
if (0) {
}
if (-0) {
}
if (0n) {
}
if ("") {
}
if (null) {
}
if (undefined) {
}
if (NaN) {
}

// Return value in the conditions not just true/false
// OR: returns first value that is true
// If no true value is found, it returns the last value
const testOrOne = 5 || 6;
console.log(testOrOne);
// OUTPUT: 5, because 5 is the first true value
const testOrTwo = 0 || 20;
console.log(testOrTwo);
// OUTPUT: 20, because 0 ist false
const testOrThree = 0 || false || null;
console.log(testOrThree);
// OUTPUT: null, because it is the last one and all are false

// AND: returns first value that is false
// If no false value is found, it returns the last value
const testAndOne = 5 && 6;
console.log(testAndOne);
// OUTPUT: 6, all are true, so it returns the last value
console.log(testAndTwo);
const testAndTwo = 0 && 20;
// OUTPUT: 0, because it is the first false value
const testAndThree = 0 && false && null;
console.log(testAndThree);
// OUTPUT: 0, because it is the first false value
