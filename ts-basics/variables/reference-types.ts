// 1) Arrays
// A collection of values of the same data type
// 1.1) Different types of arrays
let exampleArrayString: string[] = ["hello", "goodbye", "salve"];
let exampleArrayBoolean: boolean[] = [true, false, false];
console.log("Can be printed easily like: " + exampleArrayString);

// 1.2) Automatic type inference
let exampleArrayNumbersInferred = [1, 2, 3, 4, 5];

/* 2) Objects
 * instance which contains set of key value pairs
 * The values can be:
 * scalar values
 * functions
 * even array of other objects */

// 2.1) Inferred obj type
let exampleObjTypeInferred = {
  name: "Max",
  age: 32,
}; // OUTPUT: exampleObjTypeInferred if of type any object
// Is equal to `let exampleObjTypeInferred: any = {}`

// 2.2) Combined type assignment and creation
// Type assignment: `: number`
// Object creation: `= ...`
// "?" operator for optional properties
let exampleObj: {
  name?: string;
  age?: number;
} = {
  name: "Peter",
};

// 2.3) Separate type assignment and creation
type Employee = {
  name: string;
  salary: number;
};
let employee: Employee = {
  name: "Julia",
  salary: 68000,
};

// 2.4) Array of objects
let employees: Employee[] = [
  { name: "Maximilian", salary: 20000 },
  { name: "Maximilian", salary: 20000 },
  { name: "Maximilian", salary: 20000 },
];

// 2.5 Printing objects
console.log("Can be easily printed like this:");
console.log(exampleObjTypeInferred);
console.log(
  "But not working with other string like this: " + exampleObjTypeInferred
);

// 2.6 Check if a Property Exists in an Object
// Using `in` keyword
const worker = { name: "John Doe", salary: 1000 };
console.log("salary" in person); // return true
console.log("age" in person); // returns false

// 2.7 Access properties of objects
// Reference https://dmitripavlutin.com/access-object-properties-javascript/
const hero = {
  surname: "Batman",
  lastname: "Robin",
};

// Dot property accessor
console.log(hero.surname); // => 'Batman'

// Square brackets property accessor
const property = "lastname";
console.log(hero["surname"]); // => 'Batman'
console.log(hero[property]); // => 'Robin'

// Object destructuring
const { surname } = hero;
console.log(surname); // => 'Batman'

// Object destructuring with alias variable
const { surname: heroName } = hero;

// Dynamic property name
// extract to variables properties with the dynamic value
const { [property]: othername } = hero;
othername; // => 'Batman'
