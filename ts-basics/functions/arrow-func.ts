// ARROW FUNCTIONS (OR CALLED LAMBDA FUNCTIONS)
// Compact alternative to a traditional function expression
let sum = (x: number, y: number): number => {
  return x + y;
};
console.log(sum(10, 20)); //returns 30

let hello = function (x: number, y: number): number {
  return x + y;
};
console.log(sum(10, 20)); //returns 30
