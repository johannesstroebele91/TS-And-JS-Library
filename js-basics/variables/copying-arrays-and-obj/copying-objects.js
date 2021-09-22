// THESE APPROACHES ONLY WORK FOR OBJECTS

// 1) SHALLOW COPY: copies only the first layer of an array/object
// 2) DEEP COPY: copies all layers of an array/object
// 3) OBJECTS vs FUNCTION OBJECTS: copying and manipulating

// HOW TO MAKE AN COPY OF AN OBJECT
// If we DON'T WANT TO AFFECT THE ORIGINAL OBJECT

// 1) SHALLOW COPY
// DOES NOT WORK AS EXPECTED, only first layer works, but no deeper layers!
// Only copy the reference (first layer) of the object from the original
// THEREFORE NO REAL COPY, JUST ANOTHER REFERENCE TO THE SAME OBJECT!
console.log("A) SHALLOW COPY");

// 1.1) Object:
// "Object.assign()"
const exampleObject = {
  name: "Firstname Lastname",
  address: {
    city: "malolos",
    province: "bulacan",
    country: "PH",
  },
  runFunction: () => {},
  undef: undefined,
};
const copyExampleObjectReference = exampleObject;
const copyExampleObjectShallow = Object.assign({}, exampleObject);
copyExampleObjectShallow.name = "Peter Pan";
console.log(exampleObject);
console.log(copyExampleObjectReference);
console.log("\n\nShallow copying and change of first layer:");
console.log(copyExampleObjectShallow);
// OUTPUT: Only the shallow copy includes 'Peter Pan' as name AS EXPECTED

console.log("\n\nShallow copying and change of second layer:");
copyExampleObjectShallow.address.city = "Johannesburg";
console.log(exampleObject);
console.log(copyExampleObjectReference);
console.log(copyExampleObjectShallow);
// OUTPUT: WARNING: Changing the second or deeper layer changes the value for all objects

// 1.2) Array
// "Array.slice()"
const exampleArray = ["Avocado", "Peanuts", "Creme"];
const copyExampleArray = exampleArray;

console.log(exampleArray);
console.log(copyExampleArray);

// 1.3) Array & Object:
// Spread operator "..."

// 2) DEEP COPY
// WORK AS EXPECTED, not only first, but also deeper layers!
// Copy all layers from the object from the original
// And DOESN'T reference any values in the original
console.log("\n\nB) DEEP COPY");

// 2.1) SOLUTION: JSON.stringify
// WARNING: slow performance, but easy to code
// May sure that object only contains data that JSON understands
// Rest will be lost such as function, new Data(), undefined),
const copyExampleObjectDeep = JSON.parse(JSON.stringify(exampleObject));
copyExampleObjectDeep.name = "Lisa Lambert";
copyExampleObjectDeep.address.city = "Wolfenstein";
console.log(exampleObject); // OUTPUT: the same as the original object
console.log(copyExampleObjectDeep); // OUTPUT: as expected the new adapted object across all layers is printed,
// HOWEVER: functions and variables with the value undefined are omitted

// 2.2) SOLUTION: PACKAGES/LIBRARIES
// Lodash: cloneDeep function
// Jquery: jQuery.extend

// 2.3) SOLUTION: Create MY OWN function with for loops

// 3) OBJECTS vs FUNCTION OBJECTS: copying and manipulating

// If completely new objects are needed based on the initial object,
// a deep copy using function objects is needed
// For single dimension objects, the spread operator is enough

// Libraries enable to make objects completely immutable (https://immutable-js.com/, https://immerjs.github.io/immer/)

// 3.1) Function object solution (Deep Copy)
// Creating a new object based on a function object
// enables to get a completely new object
// that references NOt the initial object!!!
const getInitialObject = () => ({ a: 1, b: 1, c: 1, d: { d1: 1, d2: 1 } });

const o5 = getInitialObject();
const o6 = getInitialObject();

o5.a = 2;
o5.d.d1 = 2;

console.log({ o5 }); // { o5: { a: 2, b: 1, c: 1, d: { d1: 2, d2: 1 } } }
console.log({ o6 }); // { o6: { a: 1, b: 1, c: 1, d: { d1: 1, d2: 1 } } }
console.log({ ...getInitialObject() }); // { a: 1, b: 1, c: 1, d: { d1: 1, d2: 1 } }

// 3.2) WARNING: Normal object solution using spread operator (Shallow Copy)
// Creating a new object based on a normal object using the spread operator
// does create actual new object references for the first dimension of the object
// BUT ONLY for the deeper layers, only references the initial object

// Therefore, changing one object of the deeper dimensions of the object,
// changes all of them!!!
initialObject = { a: 1, b: 1, c: 1, d: { d1: 1, d2: 1 } };
const o3 = { ...initialObject };
const o4 = { ...initialObject };

o3.a = 2;
o3.d.d1 = 2;

console.log({ o3 }); // { o3: { a: 2, b: 1, c: 1, d: { d1: 2, d2: 1 } } }
console.log({ o4 }); // { o4: { a: 1, b: 1, c: 1, d: { d1: 2, d2: 1 } } }
console.log(initialObject); // { a: 1, b: 1, c: 1, d: { d1: 2, d2: 1 } }

// Example using fetch
function fetchServerData() {
  return {
    a: 1,
    b: 1,
    c: 1,
  };
}

const myOriginalObject = fetchServerData();

renderPanelA(myOriginalObject);
renderPanelB(myOriginalObject);

function renderPanelA(obj) {
  const newObj = transformB(transformA(obj));
  console.log(newObj);
}

function renderPanelB(obj) {
  console.log(obj);
}

function transformA(obj) {
  return { ...obj, a: 2 };
}

function transformB(obj) {
  return { ...obj, b: 3 };
}

// 3.3) WARNING: Normal object solution (Same object references)
// Creating a new object based on a normal object
// does not create a actual new object
// but references the initial object completely!!!

// Therefore, changing one object, changes all of them!!!
let initialObject = { a: 1, b: 1, c: 1, d: { d1: 1, d2: 1 } };

// Function Objects
const o1 = initialObject;
const o2 = initialObject;

o1.a = 2;
o1.d.d1 = 2;

console.log({ o1 }); // { o1: { a: 2, b: 1, c: 1, d: { d1: 2, d2: 1 } } }
console.log({ o2 }); // { o2: { a: 2, b: 1, c: 1, d: { d1: 2, d2: 1 } } }
console.log(initialObject); // { a: 2, b: 1, c: 1, d: { d1: 2, d2: 1 } }
