// IMPORTANT!
// ALL functions do not change the array itself!!!
const exampleArray = [1, 4, 9, 16];
console.log("exampleArray");
console.log(exampleArray);

// 1) Map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
console.log("map((x) => x * 2)");
console.log(exampleArray.map((x) => x * 2)); // OUTPUT: Array [2, 8, 18, 32]
console.log(
  exampleArray.map((num) => {
    return num * 2;
  })
);

// 2) Filter
console.log("filter((number) => number > 6)"); 
console.log(exampleArray.filter((number) => number > 6)); // OUTPUT: [9, 16]

// 3) Reduce
// executes a reducer function (that you provide) on each element of the array,
// resulting in single output value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
console.log("(accumulator, currentValue) => accumulator + currentValue")
console.log("reduce(reducer)");
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(exampleArray.reduce(reducer));
console.log(exampleArray.reduce(reducer, 5)); // add element "5" to the function

// 4) Find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
console.log("find((e) => (e = 4))")
console.log(exampleArray.find((e) => (e = 4)));

// 5) FindIndex
// returns the index of the first element in the array
// that satisfies the provided testing function.
// Otherwise, it returns -1, // indicating that no element passed the test
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
console.log("findIndex(isLargeNumber)")
const isLargeNumber = (element) => element > 13;
console.log(exampleArray.findIndex(isLargeNumber));

// 6) Filter
// creates a new array with all elements
// that pass the test implemented by the provided function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
console.log("exampleArray.filter(num => num > 6)")
console.log(exampleArray.filter(num => num > 6));

// 7) Concat
// Used to merge two or more arrays
// Does not change the existing arrays,
// but instead returns a NEW array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
console.log("concat(exampleArrayAdditional)")
const exampleArrayAdditional = [3, 7, 42, 1];
console.log(exampleArray.concat(exampleArrayAdditional));

// 8) Slice
// returns a shallow copy of a portion of an array
// into a new array object selected from start to end (end not included)
// where start and end represent the index of items in that array
// The parameters are the indexes in the array! 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
console.log("slice(2, 4)")
console.log(exampleArray.slice(2));
console.log(exampleArray.slice(2, 4));

// 9) Splice
// changes the contents of an array
// by removing or replacing existing elements
// and/or adding new elements in place
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// NUMBERS ARE IMPORTANT: inserts 321 at index 1
console.log("splice(1, 0, 321)");
console.log(exampleArray.splice(1, 0, 321));

// NUMBERS ARE IMPORTANT: Replaces 1 element at index 3 with -583
console.log("splice(3, 1, -583)");
console.log(exampleArray.splice(3, 1, -583));
