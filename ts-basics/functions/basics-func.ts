// Reference: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// primary means of passing data around in JavaScript
// allows you to specify the types of both the input and output values of functions.
// They can used to local functions, imported from another module, or methods on a class

// 1) RETURN TYPE ANNOTATIONS
// 2) PARAMETER TYPE ANNOTATIONS
// 3) DIFFERENT TYPES OF DECLARATION OF FUNCTIONS
// 4) Usage of an object in a function
// 5) OPTIONAL PROPERTIES

// 1) DIFFERENT TYPES OF DECLARATION OF FUNCTIONS
// Named function
function addNamed(x: any, y: any) {
  return x + y;
}
console.log("Named function: ", addNamed(2, 4));

// Anonymous function
let addAnonymous = function (x: number, y: number) {
  return x + y;
};
console.log("Anonymous function: ", addAnonymous(2, 4));

// Arrow function
let addArrowLambda = (x: number, y: number) => {
  return x + y;
};
// 2) RETURN TYPE ANNOTATIONS
// When a parameter has a type annotations,
// arguments to that function will be checked:
// greet(42); // OUTPUT: runtime error if executed!

// 2.1) Return type not needed
// the return type is not needed, because TS will infer it automatically
function getFavoriteString() {
  return "Hello";
}
console.log(getFavoriteString()); // Output: "Hello"

// 2.2) Return type explicitly specified
// If a return type is explicitly specified
// it is practically only for documentation purposes
function getFavoriteNumber(): number {
  return 26;
}

// 1.3) No return type specified
// return type is set automatically to void if no type is specified
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// 3) PARAMETER TYPE ANNOTATIONS
// add type annotations after each parameter
// to declare what types of parameters the function accepts
function greetParameterAnnotation(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// 4) Usage of an object in a function
let pt = { x: 3, y: 7 };
function printCoordinates(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoordinates(pt);

// 5) OPTIONAL PROPERTIES
// Object types can also specify that some or all of their properties are optional
function printName(obj: { first: string; last?: string }): string {
  return this.first + " " + this.last;
}
printName({ first: "Peter", last: "Mueller" }); // OUPUT:
printName({ first: "Peter" }); //

console.log("Usage of an object in a function".toUpperCase);
