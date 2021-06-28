// 1) Arrays
const exampleArrayNumbers: number[] = [1, 2, 3];
const exampleSmallNumber = 2;

const newArrayNumbers = [exampleSmallNumber, ...exampleArrayNumbers, 1, 2, 3];
console.log(newArrayNumbers);

// 2) Objects
const exampleObjPerson = {
  name: "Max",
  age: 32,
};
console.log(exampleObjPerson);

// 2.1) EMBEDDING OBJ WITH SPREAD OPERATOR
// object is embedded at the first layer
const exampleObjEmployeesSpreaded = {
  ...exampleObjPerson,
  education: "University",
};
console.log(exampleObjEmployeesSpreaded);

// 2.2) EMBEDDING OBJ WITHOUT THE SPREAD OPERATOR
// object is embedded at the second layer
// and not the first
const exampleObjEmployees = {
  exampleObjPerson,
  education: "University",
};
console.log(exampleObjEmployees);

// 2.3) Conditionally add properties to objects
// Using spread operator `...`
const condition = true;

const person = {
  id: 1,
  ...(condition && { age: 16 }),
};

/* 2.4) Dynamic Property Names in Objects
- dynamic properties enable to
    - attach temporary data to objects
    - or to assign data
- that you want to associate with an instance of a class,
- but not all objects of that class */
const dynamicProperty = "flavour";

let item = {
  name: "Biscuit",
  [dynamicProperty]: "Chocolate",
};

console.log(item); // { name: 'Biscuit', flavour: 'Chocolate' }
console.log(item[dynamicProperty]); // returns 'Biscuit'

// Object Destructuring With a Dynamic Key
// Using the `:`
