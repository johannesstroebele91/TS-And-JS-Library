// Reference: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// 1) BASICS ABOUT FUNCTIONS
// 2) OPTIONAL PROPERTIES
// 3) ARROW FUNCTIONS (OR CALLED LAMBDA FUNCTIONS)
// 4) THIS

// 1) BASICS ABOUT FUNCTIONS
// primary means of passing data around in JavaScript
// allows you to specify the types of both the input and output values of functions.
// They can used to local functions, imported from another module, or methods on a class

// 1.1) PARAMETER TYPE ANNOTATIONS
// add type annotations after each parameter
// to declare what types of parameters the function accepts
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
// When a parameter has a type annotations,
// arguments to that function will be checked:
// greet(42); // OUTPUT: runtime error if executed!
greet('Max'); // OUTPUT: Hello, Max

// 1.2) RETURN TYPE ANNOTATIONS
// the return type is not needed, because TS will infer it
// explicitly specify a return type for documentation purposes or docu
function getFavoriteNumber(): number {
    return 26;
}

// 1.3) DIFFERENT TYPES OF DECLARATION OF FUNCTIONS
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

// 1.4) Usage of an object in a function
let pt = {x: 3, y: 7};
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord(pt);

// 2) OPTIONAL PROPERTIES
// Object types can also specify that some or all of their properties are optional
function printName (obj: {first: string; last?: string}): string {
    return this.first + ' ' + this.last;
}
printName({first: 'Peter', last: 'Mueller'}); // OUPUT:
printName({first: 'Peter'}); //

// 3) ARROW FUNCTIONS (OR CALLED LAMBDA FUNCTIONS)
// Compact alternative to a traditional function expression
let sum = (x: number, y: number): number => {
    return x + y;
}
console.log(sum(10, 20)); //returns 30

// 3) Defining a Union Type
// TS enables to combine types
// each of these types are called the union’s members
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
printId(101); // OUTPUT: 101
printId("202"); // OUTPUT: 202
// printId({ myID: 22342 }); // OUTPUT: // Error

// 4) THIS OBJECT
// "this" object refers to the parent object of a function where it has been executed
// The value of this is determined on how a function is called
// it retains the "this" object where it was created!
// this.console.log(setTimeout()); // OUTPUT: window object -> all functionalities of JS are coming from global window object
const user = {
    id: 123,

    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};

console.log(user.becomeAdmin());

