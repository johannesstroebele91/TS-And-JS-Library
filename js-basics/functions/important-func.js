// IMPORTANT!
// ALL functions do not change the array itself!!!
const exampleArray = [1, 4, 9, 16];
console.log("exampleArray");
console.log(exampleArray);

// 1) Map
// creates a new array populated
// with the results of calling a provided function
// on every element in the calling array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
console.log("map((x) => x * 2)");
console.log(exampleArray.map((x) => x * 2)); // OUTPUT: Array [2, 8, 18, 32]
console.log(
  exampleArray.map((num) => {
    return num * 2;
  })
);

const checkins = [5, 4.4, 4.3, 3.1, 2.3, 2.2, 2.1, 1];
const checkinsByDay = [[5], [4.4, 4.3], [3.1], [2.3, 2.2, 2.1], [1]];
const output = checkinsByDay.flatMap((checkinsOfDay) => {
  return checkinsOfDay.map((checkin, index) => {
    const isLastElement = index === checkinsOfDay.length - 1;
    const isFirstCheckinOfDay = isLastElement;
    return {
      date: checkin,
      rateable: isFirstCheckinOfDay,
    };
  });
});
console.log(output);

// Map Arrow function
// Since map builds a new array, using it when you aren't using the returned array
// is an anti-pattern; use forEach or for...of instead
// element: current element being processed in the array
// index (optional): index of the current element being processed in the array.
// array (optional): array map was called upon
// return value: new array with each element being the result of the callback function
map((element) => {});
map((element, index) => {});
map((element, index, array) => {});

// The array that should be mapped can be positioned differently
// a) inside "problemRules.rules"
const rules = map(problemRules.rules, (rule) => ({
  rule,
  problemId: problemRules.problemId,
}));
// b) outside "problemRules.rules.map"
const rules = problemRules.rules.map((rule) => ({
  rule,
  problemId: problemRules.problemId,
}));

// Not only can a element be created for the new array,
// but an object like in this example "{rule, ...}"
const rules = problemRules.rules.map((rule) => ({
  rule,
  problemId: problemRules.problemId,
}));

// 2) Filter
// creates a new array
// with all elements that
// pass the test implemented by the provided function
console.log("filter((number) => number > 6)");
console.log(exampleArray.filter((number) => number > 6)); // OUTPUT: [9, 16]

// 3) Reduce
// executes a reducer function (that you provide) on each element of the array,
// resulting in single output value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
console.log("(accumulator, currentValue) => accumulator + currentValue");
console.log("reduce(reducer)");
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(exampleArray.reduce(reducer));
console.log(exampleArray.reduce(reducer, 5)); // add element "5" to the function

// 4) Find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
console.log("find((e) => (e = 4))");
console.log(exampleArray.find((e) => (e = 4)));

// 5) FindIndex
// returns the index of the first element in the array
// that satisfies the provided testing function.
// Otherwise, it returns -1, // indicating that no element passed the test
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
console.log("findIndex(isLargeNumber)");
const isLargeNumber = (element) => element > 13;
console.log(exampleArray.findIndex(isLargeNumber));

// 6) Filter
// creates a new array with all elements
// that pass the test implemented by the provided function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
console.log("exampleArray.filter(num => num > 6)");
console.log(exampleArray.filter((num) => num > 6));

// 7) Concat
// Used to merge two or more arrays
// Does not change the existing arrays,
// but instead returns a NEW array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
console.log("concat(exampleArrayAdditional)");
const exampleArrayAdditional = [3, 7, 42, 1];
console.log(exampleArray.concat(exampleArrayAdditional));

// 8) Slice
// returns a shallow copy of a portion of an array
// into a new array object selected from start to end (end not included)
// where start and end represent the index of items in that array
// The parameters are the indexes in the array!
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
https: console.log("slice(2, 4)");
console.log(exampleArray.slice(2));
console.log(exampleArray.slice(2, 4));
console.log("hello".slice(-2));

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

// 10) Split
// divides a String into an ordered list of substrings
// puts these substrings into an array,
// and returns the array
console.log("Split");
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

// 11) Trim
// Removes excess whitespaces from the string
console.log("Trim");
untrimmedStr = "The quick brown fox     ";
console.log(untrimmedStr);
console.log(untrimmedStr.trim());

// 12) Boolean
// Boolean method tests methods for truthy values
console.log("Boolean");
const myArray = [null, false, "Hello", undefined, 0];
console.log(myArray.filter(Boolean)); // returns 'Hello' which is the only true value here

// This explains how it works:
// array methods take a callback function,
// so we pass Boolean as a callback function
myArray.filter((val) => Boolean(val));

// 13) Flattening Arrays of Arrays
console.log("Flattening Arrays of Arrays");
const unflattendArray = [{ id: 1 }, [{ id: 2 }], [{ id: 3 }]];
console.log(unflattendArray.flat()); // returns [ { id: 1 }, { id: 2 }, { id: 3 } ]

// 14) Using return value of a async function using .then
console.log(
  "Using return value of a async function, that returns a promise, using .then"
);
let promiseSuccessful = Promise.resolve([1, 2, 3]);
// This created promise is a substitute for a normal async function
// Example: someAsyncFunction = (): Promise<any> => {...}
promiseSuccessful.then((current) => {
  if (!!current) {
    console.log(current);
  } else {
  }
});
