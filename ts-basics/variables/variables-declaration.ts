// 1) Basics
// ALWAYS INITIALIZE VARIABLES!!!
let arrayInitializeAlways: string[] = [];
// any type
let obj: any = { x: 0 };
// Template literals(strings)
// a) Enable to embed expressions or interpolate strings
console.log(`string text ${obj.x + 2} string text`);
// b) Enables multi-line strings
console.log(`string text line 1
string text line 2`);
console.log("string text line 1\n" + "string text line 2");

// 2) Primitive Types
console.log("Primitive Types");
let someString: string = "Peter Mueller";
someNumber: 23;
let someBoolean: boolean = false;

// Insert variable into other string
let someStringAndVariable: string = `Expected 'val' to be defined, but received ${someString}`;

// 3) Reference Types
// 3.1) Array
console.log("Arrays");
let someNumbers: Array<number> = [1, 2, 3];
let someNumbersOne: Array<number>;
someNumbersOne = [1, 2, 3];
let someNumbersTwo = new Array(5);
console.log("Empty array" + someNumbersTwo);

// 3.2) Objects
// refers to JavaScript value with properties, which is almost all of them
// The parameter's type annotation is an object type
console.log("Objects");
let numbers = { x: 3, y: 7 };
console.log(numbers);
