// Data
let exampleArray = [1,2,3,42,1]
let exampleObj = {
    name: 'Max',
    age: 23,
    education: {
        degree: 'Bachelor', 
        university: 'University of Cologne'
    }
}

// 1) Without Destructuring
console.log("1) Without Destructuring");
// 1.1) Arrays
console.log("ExampleArray[3]: " + exampleArray[3]);
// 1.2) Objects
console.log("\nObject: ");
console.log(exampleObj.name);
console.log(exampleObj.education.degree);

// 2) With Destructuring
console.log("2) With Destructuring"); 
// 2.1) Normal
// Only the first 2 elements are extracted
// The last element is unnecessary because it wont be extracted
const [firstElement, secondElement] = [64,12, 47];
console.log("\nfirstElement: " + firstElement); // prints 64
console.log("secondElement: " + secondElement); // prints 12

// Destructuring allows you to
// easily extracting values from arrays or objects 

// 2.2) Array
// Extracting values from an array
const array = [1, 2, 3];
const [a, b] = array;
console.log("\n" + a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]

// 2.2) Object
const {age} = exampleObj;
console.log(age); // prints 'Max'
// console.log(education.degree); // ERROR: prints undefined
console.log(exampleObj); // prints {name: 'Max', age: 28}

// 2.3) Functions
const printName = (exampleObj) => {
    console.log(exampleObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'

// ISSUE
// Only want to print the name in the function
// but pass a complete person object to the function.
// Of course this is NO issue
// but it forces us to call personObj.name inside of the function.

// SOLUTION
// we simply pull out the name  property
// and store it in a variable/ argument named name
// which we then can use in the function body

// It can be condense with destructuring:
const printNameCondensed = ({name}) => console.log(name);
printNameCondensed({name: 'Max', age: 28}); // prints 'Max')
