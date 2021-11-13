// "this" object: references the class
// "it refers to the parent object of a function where it has been executed
// The value of this is determined on how a function is called
// it retains the "this" object where it was created!
// this.console.log(setTimeout()); // OUTPUT: window object -> all functionalities of JS are coming from global window object
const userDetails = {
  name: "My name",
  getName: function () {
    name = "test name";
    return this.name; // DOES NOT REFER to 'test name', but to the PARENT OBJECT 'My name'
  },
};

const hello = "hello";
console.log(this.closed); // undefined, because it references the parent function
// the parent function in node.js is an empty object {} and in the browser the window function

console.log(
  "This class function displays the name of the parent object using this: " +
    userDetails.getName()
); // OUTPUT: 'My name'

class Person {
  constructor(name) {
    this.name = name;
  }

  printName() {
    this.name = "Hilde";
    console.log("Name (printName): ", this.name);
  }

  printNameArrowFunction = () => {
    this.name = "Hilde";
    console.log("Name (printNameArrowFunction): " + this.name);
  };

  printNameArrowFunctionNested() {
    this.name = "Hilde";
    console.log("Name (printNameArrowFunctionNested): " + this.name);

    const userDetails = {
      name: "Test for checking this working of this keyword",
      printName: () => {
        console.log(
          "Name (printNameArrowFunctionNested + userDetails): " + this.name
        );
      },
    };

    userDetails.printName();
  }
}

const peter = new Person("Peter");
peter.printName(); // OUTPUT: User Details:  My Name
peter.printNameArrowFunction(); // OUTPUT:
peter.printNameArrowFunctionNested(); // OUTPUT WARNING: User Details:  My Name
// EXPLANATION: this.name references not the name (can be called with "name" alone), but the Person objet

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

obj.foo(); // 2

name = "Hilde";
var john = {
  name: "John",
  greet: function (person) {
    console.log("Hi " + person + ", my name is " + this.name);
  },
};

john.greet("Mark"); // Hi Mark, my name is John - john.greet(“Mark”) this will refer to the john object

var fx = john.greet;
fx("Mark"); // Hi Mark, my name is Hilde - reference to the greet function itself

var golfGames = {
  tournament: "The Masters",
  players: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 },
  ],
  showAllGames: function () {
    currObject = this;
    this.players.forEach(function (player) {
      console.log(player.name + " is playing at " + currObject.tournament);
    });
  },
};

golfGames.showAllGames();

let o = {
  prop: 37,
  f: function () {
    return prop;
  },
};
console.log(o.f());
