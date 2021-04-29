// Primitive types can be
// string, number, bigint, boolean, undefined, symbol, any

// Example: Number
let exampleNumber: number = 1;
let copyexampleNumber: number = exampleNumber;
exampleNumber = 2;
// let firstNumberString: number = '1'; // OUTPUT: Error - Type 'string' is not assignable to type 'number'
console.log(exampleNumber); // OUTPUT: 2
console.log(copyexampleNumber); // OUTPUT: 1
// Conclusion: Changing the original and the copy will not affect each other

// Example: string, boolean, any
let exampleBoolean: boolean = true;
let exampleString: string = "This is a string";

// Inference of type: number
let exampleNumberInferredType = 1; // OUTPUT: number 1  inferred
function displayNumber(someNumber: number): number {
    return someNumber;
}
console.log("This is the proof that a number was inferred: " + displayNumber(exampleNumberInferredType));
function displayString(someString: string): string {
    return someString;
}
// console.log("This is the proof that a number was inferred: " + displayString(exampleNumberInferredType));
// OUTPUT: produces an error, because the variable is
// permanently a number due to inference of type