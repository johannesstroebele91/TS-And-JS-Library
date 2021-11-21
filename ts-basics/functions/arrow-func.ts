// ARROW FUNCTIONS (OR CALLED LAMBDA FUNCTIONS)
// Compact alternative to a traditional function expression
let sum = (x: number, y: number): number => {
  return x + y;
};
console.log(sum(10, 20)); //returns 30

let me = {
  name: "Ashutosh Verma",
  thisInArrow: () => {
    const name = "Other name";

    console.log("My name is " + name); // no 'this' binding here
  },
  thisInRegular() {
    console.log("My name is " + this.name); // 'this' binding works here
  },
};
me.thisInArrow();
me.thisInRegular();
