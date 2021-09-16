// ACCESS, ASSIGN, AND CHANGE ARRAYS AND OBJECTS WITHOUT DESTRUCTURING

/* Basics
 * SPREAD OPERATOR
 * REST OPERATOR */ 

// Data
const userDetails = {
  name: 'Peter Purtan',
  address: {
      city: 'malolos',
      province: 'bulacan',
      country: 'PH'
  },
  runFunction: () => {},
  undef: undefined
}

// 1) Basics
console.log("1) Basics");
const fruits = ['Avocado', 'Banana', 'Apple'];

const nameWithoutDestruction = userDetails.name;
const addressWithoutDestruction = userDetails.address;
console.log('Name: ' + nameWithoutDestruction);
console.log('Address: ' + JSON.stringify(addressWithoutDestruction));

const fristFruit = fruits[0] || 'defaultFruit';
console.log('Frist fruit: ' + fristFruit);

// 2) SPREAD OPERATOR
// used to add up array elements OR object properties
console.log("2) Spread Operator");
console.log("2.1) Arrays");
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];
console.log(oldArray.toString(), newArray.toString());
console.log("2.2) Objects");
const oldObj = {
  name: "Mattie",
  age: 6,
};
const newObj = { ...oldObj, height: 1.7 };
console.log(JSON.stringify(oldObj));
console.log(JSON.stringify(newObj));

// 3) REST OPERATOR
// Used to merge a list of arguments into an array
console.log("3) REST Operator");

// 3.1) For Functions, the rest operator allows to accept
// an indefinite number of arguments as an array
function sortArgs(...args) {
  return args.sort();
}
function lengthArray(...someArgs) {
    return someArgs.length; 
}


// 3.2) Arrow function
// checks if an element in the array matches 1 and return it
const filter = (...a) => { a.filter(element => element === 1)};
console.log(filter(1,2,3))

// 3.3) More complex example
function sum(...someArgs) {
  // Reduce function
  // executes a reducer function (that you provide) on each element of the array, resulting in single output value (iterates)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  return someArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 5, 3, 562, 34));
console.log(sum(2, 3, 2, 1, 2, 5, 3, 2, 3, 1));
console.log("Length of an array: " + lengthArray(2, 3, 2, 1, 2, 5, 3, 2, 3, 1));


const ["h" + "ello"] = "name";
