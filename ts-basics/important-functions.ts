// OVERVIEW OF IMPORTANT FUNCTIONS IS GIVEN BELOW

// Variables for later usage
let someRandomNumbers: number[] = [1, 2, 3, 4, 5];
let monthsArray: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const inventoryObject = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Array.from()
// Enables to iterate over iterable variables such as arrays and objects
console.log('Array.from()');
console.log(Array.from(someRandomNumbers, value => value * 2)); // [2, 4, 6, 8, 10]

// .forEach()
// Find element in array
// Executes a provided function once for every element in the array
console.log('someArray.forEach()');
console.log(monthsArray.forEach(months => console.log(months)));

// .find()
// Find element in array
// Returns the value of the first element in the array
// that satisfies the provided test condition
console.log('.find()');

function findCherries(fruit: { name: string; }) {
    return fruit.name === 'cherries';
}
console.log(inventoryObject.find(findCherries)); // { name: 'cherries', quantity: 5 }
console.log(inventoryObject.find(element => element.name === 'apples')); // { name: 'apples', quantity: 2 }

// .filter()
// Filter elements in array
// creates a new array with all the elements
// that satisfies the provided test condition
console.log('.filter()');
function isBigEnough(element: number, index: number, array: number[]) {
    return (element >= 10);
}

let passed = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Test Value : " + passed );


// Timeout
// Create alert after 1000 ms
console.log('setTimeout()');
console.log(setTimeout(() => console.log('Hello'), 1000));

// Create an element with an single Element in an Array
console.log('Array.of()');
console.log(Array.of(2348, 234,234).toString()); // Creates an array with the respective elements (most be the same type)
console.log(Array(4).toString()); // Creates an array with the length 4

// Fill array with same element
console.log('.fill()');
let someBooleanArray: boolean[] = new Array(5).fill(false);
console.log(someBooleanArray);

// .map()
// executes a provided function once for every element in the array and
// returns a new transformed array
console.log('.map()');
console.log(monthsArray); // Array before
console.log(monthsArray.map(month => month.toUpperCase())); //
console.log(monthsArray); // stay the same (not transformed)

// .every()
console.log('.every()');
// tests whether all elements in the array pass the test implemented by the provided function
const isBelowThreshold = (currentValue: number) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // output: true
