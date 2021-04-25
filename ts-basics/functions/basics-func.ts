// Reference: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// primary means of passing data around in JavaScript
// allows you to specify the types of both the input and output values of functions.
// They can used to local functions, imported from another module, or methods on a class

// 1) PARAMETER TYPE ANNOTATIONS
// 2) RETURN TYPE ANNOTATIONS
// 3) DIFFERENT TYPES OF DECLARATION OF FUNCTIONS
// 4) Usage of an object in a function
// 5) OPTIONAL PROPERTIES


function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// 1) PARAMETER TYPE ANNOTATIONS
// add type annotations after each parameter
// to declare what types of parameters the function accepts
function greetAnnotation(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
// When a parameter has a type annotations,
// arguments to that function will be checked:
// greet(42); // OUTPUT: runtime error if executed!
greet('Max'); // OUTPUT: Hello, Max

// 2) RETURN TYPE ANNOTATIONS
// the return type is not needed, because TS will infer it
// explicitly specify a return type for documentation purposes or docu
function getFavoriteNumber(): number {
    return 26;
}

// 3) DIFFERENT TYPES OF DECLARATION OF FUNCTIONS
// Named function
function add(x: any, y: any) {
    return x + y;
}
console.log('Named function: ', add(2,4));

// Anonymous function
let myAdd = function (x: number, y: number) {
    return x + y;
};
console.log('Anonymous function: ', myAdd(2,4));

// 4) Usage of an object in a function
let pt = {x: 3, y: 7};
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord(pt);

// 5) OPTIONAL PROPERTIES
// Object types can also specify that some or all of their properties are optional
function printName (obj: {first: string; last?: string}): string {
    return this.first + ' ' + this.last;
}
printName({first: 'Peter', last: 'Mueller'}); // OUPUT:
printName({first: 'Peter'}); //

console.log("Usage of an object in a function".toUpperCase);
