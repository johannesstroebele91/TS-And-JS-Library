// THESE APPROACHES WORK ONLY FOR ARRAYS

// A) SHALLOW COPY: copies only the first layer of an array/object
// B) DEEP COPY: copies all layers of an array/object

// HOW TO MAKE AN COPY OF AN ARRAY
// If we DON'T WANT TO AFFECT THE ORIGINAL ARRAY

// A) NORMAL COPY
console.log("1) NORMAL COPY");
console.log("1.1) Normal Array");
let exampleArray = ["Avocado", "Peanuts", "Creme"];
const copyExampleArray = exampleArray;

// Changing the array
copyExampleArray.push("Guava");

console.log(exampleArray); // OUTPUT: [ 'Avocado', 'Peanuts', 'Creme', 'Guava' ]
console.log(copyExampleArray); // OUTPUT: [ 'Avocado', 'Peanuts', 'Creme', 'Guava' ]
// BOTH arrays were changed!

// Array with an Object
console.log("1.2) Array with an Object");
let exampleArrayObject = [
  { eatingTime: "Breakfast" },
  "Avocado",
  "Peanuts",
  "Creme",
];
const copyExampleArrayObject = exampleArrayObject;
copyExampleArrayObject.push("Guava");

console.log(exampleArrayObject); // OUTPUT: [ { eatingTime: 'Breakfast' }, 'Avocado', 'Peanuts', 'Creme', 'Guava' ]
console.log(copyExampleArrayObject); // OUTPUT: [ { eatingTime: 'Breakfast' }, 'Avocado', 'Peanuts', 'Creme', 'Guava' ]
// BOTH arrays were changed!

// B) SHALLOW COPY
// DOES WORK ONLY PARTIALLY!!!
// Only first layer copied, but no deeper layers!
// Only copy the reference (first layer) of the object from the original
// THEREFORE NO REAL COPY, JUST ANOTHER REFERENCE TO THE SAME OBJECT!
console.log("\n\nB) SHALLOW COPY");

// "Array.slice()"
exampleArray = ["Avocado", "Peanuts", "Creme"];
const copyExampleArraySliced = exampleArray;
copyExampleArraySliced.slice();

// Changing the array
copyExampleArraySliced.push("Guava");

console.log(exampleArray); // OUTPUT: [ 'Avocado', 'Peanuts', 'Creme', 'Guava' ]
console.log(copyExampleArraySliced); // OUTPUT: [ 'Avocado', 'Peanuts', 'Creme', 'Guava' ]
// BOTH arrays were changed!

// Array with an Object
exampleArrayObject = [
  { eatingTime: "Breakfast" },
  "Avocado",
  "Peanuts",
  { address: { city: "Ohio", country: "GER" } },
];
const copyExampleArrayObjectSliced = exampleArrayObject.slice();
copyExampleArrayObjectSliced[1] = "Apple";
copyExampleArrayObjectSliced[0].eatingTime = "Dinner";
copyExampleArrayObjectSliced[3].address.city = "Wallenstein";

console.log(exampleArrayObject); // OUTPUT: [ { eatingTime: 'Lunch' }, 'Strawberry', 'Peanuts' ]
console.log(copyExampleArrayObjectSliced); // OUTPUT: [ { eatingTime: 'Lunch' }, 'Strawberry', 'Peanuts' ]
// BOTH arrays were changed!

/* C) DEEP COPY
 * WORK AS EXPECTED!!!
 * not only first, but also deeper layers!
 * Copy all layers from the object from the original
 * And DOESN'T reference any values in the original */
console.log("\n\nC) DEEP COPY");
exampleArrayObject = [
  { eatingTime: "Breakfast" },
  "Avocado",
  "Peanuts",
  { address: { city: "Ohio", country: "GER" } },
];
const copyExampleArrayObjectDeep = JSON.parse(
  JSON.stringify(exampleArrayObject)
);
copyExampleArrayObjectDeep[1] = "Strawberry";
copyExampleArrayObjectDeep[0].eatingTime = "Lunch";
copyExampleArrayObjectDeep[3].address.city = "Petersburg";

console.log(exampleArrayObject); // OUTPUT: [{ eatingTime: 'Breakfast' },'Avocado','Peanuts', { address: { city: 'Ohio', country: 'GER' } }]
console.log(copyExampleArrayObjectDeep); // OUTPUT: [{ eatingTime: 'Lunch' },'Strawberry', 'Peanuts', { address: { city: 'Petersburg', country: 'GER' } }]
// Only the deep copied array was changed
