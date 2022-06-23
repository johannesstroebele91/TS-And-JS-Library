// 1) General
// "this" object refers to the parent object of a function where it has been executed
// The value of this is determined on how a function is called
// it retains the "this" object where it was created!
const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    return (this.admin = true);
  },
};

console.log(user.becomeAdmin()); // OUTPUTS: true

// 2) Scope of this in OBJECT
/// Nested arrow function
/// Nested normal function
let someObject = {
  name: "Ashutosh Verma",
  thisInArrow: () => {
    const name = "Other name";

    // console.log("My name is " + this.name); // 'this' leads to compile error due to arrow function references global scope "Property 'name' does not exist on type 'typeof globalThis'""
    console.log("My name is " + name);
  },
  thisInRegular() {
    const name = "Other name";
    console.log("My name is " + this.name); // 'this' binding works here with normal function
  },
};
someObject.thisInArrow();
someObject.thisInRegular();

// 3) Scope of this in REGULAR FUNCTION
function someRegularFunction() {
  const name = "Ashutosh Verma";

  // Regular function
  function thisInRegular() {
    const name = "Other name";
    // console.log("My name is " + this.name); // 'this' leads to undefined here
  }
  thisInRegular();

  // Arrow function
  const thisInArrow = () => {
    const name = "Other name";

    // console.log("My name is " + this.name); // 'this' leads to compile error due to arrow function references global scope "Property 'name' does not exist on type 'typeof globalThis'""
    console.log("My name is " + name);
  };
  thisInArrow();
}
someRegularFunction();

// 4) Scope of this in ARROW FUNCTION
// this is not accessible in arrow function!!!!
let someArrowFunction = () => {
  const name = "Ashutosh Verma";
  const thisInArrow = () => {
    const name = "Other name";

    // console.log("My name is " + this.name); // 'this' leads to compile error due to arrow function references global scope "Property 'name' does not exist on type 'typeof globalThis'""
    console.log("My name is " + name);
  };
  thisInArrow();
  function thisInRegular() {
    const name = "Other name";
    // console.log("My name is " + this.name); // 'this' leads to undefined here
  }
  thisInRegular();
};
someArrowFunction();

// 4) Scope of this in class
// this is needed to access member property of class
// for arrow and regular functions
class A {
  constructor(public name: string) {}
  public func1() {
    console.log(this.name);
    this.func2();
    return "func1";
  }
  func2 = () => {
    console.log(this.name);
  };
}
const someName = new A("a");

console.log(someName.func1());
