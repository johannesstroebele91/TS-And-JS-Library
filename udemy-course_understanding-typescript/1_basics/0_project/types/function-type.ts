// FUNCTION AS TYPES
// combinedValues accepts any function that holds no parameters and returns a number
let combinedValues: (a: number, b: number) => number;
combinedValues = add;
// combinedValues = 5; // is not possible only if function type is set
console.log(combinedValues(8, 8));

function add(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add(1, 2));

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// Can store a point to a function in a variable
// let combinedValues: Function; // Not specific enough
