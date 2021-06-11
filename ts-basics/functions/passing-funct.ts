// Func can be passed like field parameters to a function
let someNumber: 5;
let product = (x: number, y: number): number => {
  return x * y;
};

// A function can be passed like
// `product: (x: number, y: number) => number`
let anotherFunction = (
  someNumber: number,
  product: (x: number, y: number) => number
) => {
  console.log(10, product(someNumber, product(someNumber, 5)));
};
