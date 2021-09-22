// strict equality operator (===)
// behaves identically to the abstract equality operator (==)
// except no type conversion is done,
// and the types must be the same to be considered equal
// Ref: http://www.c-point.com/javascript_tutorial/jsgrpComparison.htm

let a = [1, 2, 3];
let b = [1, 2, 3];

let c = { x: 1, y: 2 };
let g = { x: 1, y: 2 };

let e = "text";
let f = "te" + "xt";

a == b; // false
a === b; // false

c == g; // false
c === g; // false

e == f; // true
e === f; // true
