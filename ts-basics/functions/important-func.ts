// OVERVIEW OF IMPORTANT FUNCTIONS IS GIVEN BELOW

// Variables for later usage
let someRandomNumbers: number[] = [1, 2, 3, 4, 5];
let monthsArray: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const inventoryObject = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Array.from()
// Enables to iterate over iterable variables such as arrays and objects
console.log("Array.from()");
console.log(Array.from(someRandomNumbers, (value) => value * 2)); // [2, 4, 6, 8, 10]

// .forEach()
// Find element in array
// Executes a provided function once for every element in the array
console.log("someArray.forEach()");
console.log(monthsArray.forEach((months) => console.log(months)));

// .find()
// Find element in array
// Returns the value of the first element in the array
// that satisfies the provided test condition
console.log(".find()");

function findCherries(fruit: { name: string }) {
  return fruit.name === "cherries";
}
console.log(inventoryObject.find(findCherries)); // { name: 'cherries', quantity: 5 }
console.log(inventoryObject.find((element) => element.name === "apples")); // { name: 'apples', quantity: 2 }

// .filter()
// Filter elements in array
// creates a new array with all the elements
// that satisfies the provided test condition
console.log(".filter()");
function isBigEnough(element: number, index: number, array: number[]) {
  return element >= 10;
}

let passed = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Test Value : " + passed);

// Timeout
// Create alert after 1000 ms
console.log("setTimeout()");
console.log(setTimeout(() => console.log("Hello"), 1000));

// Create an element with an single Element in an Array
console.log("Array.of()");
console.log(Array.of(2348, 234, 234).toString()); // Creates an array with the respective elements (most be the same type)
console.log(Array(4).toString()); // Creates an array with the length 4

// Fill array with same element
console.log(".fill()");
let someBooleanArray: boolean[] = new Array(5).fill(false);
console.log(someBooleanArray);

// .map()
// executes a provided function once for every element in the array and
// returns a new transformed array
console.log(".map()");
console.log(monthsArray); // Array before
console.log(monthsArray.map((month) => month.toUpperCase())); //
console.log(monthsArray); // stay the same (not transformed)

// .every()
console.log(".every()");
// tests whether all elements in the array pass the test implemented by the provided function
const isBelowThreshold = (currentValue: number) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // output: true

// .push() vs .concat()
// concat() adds a new item to an array BUT creates a new array for this
// instead of push()

// push() adds elements to the end of an array and returns the new length of the array. Thus your return here is invalid.
// The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array.
let a1concat = [1];
let b1concat = a1concat;
let concatedItems = a1concat.concat([2]); // needs a declaration
console.log("b1", a1concat);
console.log("b2", b1concat);
console.log("concatedItems", concatedItems);

let a2push = [1];
let b2push = a2push;
a2push.push(2); // does NOT need declaration

console.log("b1", a2push);
console.log("b2", a2push);

// .flat()
console.log(".flat()");
// creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
