// ALTERNATIVE TO TRADITIONAL FUNCTIONS "ARROW FUNCTIONS"
// Executes in the scope they are created (does not default the "this" object to the window scope)

/* Compact alternative, but has LIMITATIONS such as:
 * Not having its own bindings to this and super
 * Does not have arguments, or new.target keywords
 * Not suitable for call, apply and bind methods, which generally rely on establishing a scope
 * Can be used as constructors
 * Can not use yield, within its body (e.g. for generators) */

// Normal Function
// Separate declaration and execution
// this keyword behaves strange because it changes during runtime
function greet(name) {
  console.log(name);
}
greet("Normal Function");

// Arrow Function
// Simultaneous declaration and execution
// Solves scope issues of the this keyword!
// HOWEVER value must be accessed later!

// Arrow Function with no parameter
const greetArrowFuncEmpty = () => {
  return "Arrow Function with no parameter";
};
console.log(greetArrowFuncEmpty());

// Arrow Function with a parameter
const greetArrowFuncName = (name) => {
  return name;
};
console.log(greetArrowFuncName("Arrow Function with a parameter"));

// Arrow Function with 2 parameters
const greetArrowFuncNameAge = (name, age) => {
  return name + age;
};
console.log(
  greetArrowFuncNameAge("Arrow Function with the amount of parameters = ", 2)
);

// Arrow Function with emitted return keyword
const greetArrowFuncEmittedReturn = salary => salary * 12;
console.log(greetArrowFuncEmittedReturn(6000));

// ???
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length)); // OUTPUT: Array [8, 6, 7, 9]
// "material" is the input parameter that is used
