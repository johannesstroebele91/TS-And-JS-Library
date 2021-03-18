const exampleArray = [1, 4, 9, 16];

// 1) map()
console.log(exampleArray.map(x => x*2)); // OUTPUT: Array [2, 8, 18, 32]

// 2) filter()
console.log(exampleArray.filter(number => number > 6)); // OUTPUT: [9, 16]

// 3) reduce()
// Sample: arr.reduce(callback, initialValue);

// reducer method that takes in the accumulator and next item
const reducer = (accumulator, item) => {
    return accumulator + item;
};

// Give the reduce method the reducer function "const reducer = (accumulator, item) => {}"
// and the initial value (here "4"
console.log(exampleArray.reduce(reducer, 4));
