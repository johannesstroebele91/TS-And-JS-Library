/* THESE APPROACHES WORK FOR BOTH ARRAYS AND OBJECTS
 * approaches that work only for arrays are explained in the array copying-arrays.js
 * approaches that work only for objects are explained in the array copying-objects.js */

/* HOW TO MAKE AN COPY OF AN ARRAY OR OBJECT
 * If we DON'T WANT TO AFFECT THE ORIGINAL ARRAY OR OBJECT
    1) SHALLOW COPY: copies only the first layer of an array/object
    2) DEEP COPY: copies all layers of an array/object */

// 1) SHALLOW COPY
// WARNING! ONLY COPIES THE FIRST LAYER OF AN OBJECT (no deeper layers)
// Only copy the reference (first layer) of the object from the original
// THEREFORE NO REAL COPY, JUST ANOTHER REFERENCE TO THE SAME OBJECT!
console.log('1) SHALLOW COPY');

// Spread operator "..."
// Most easy way to create a shallow copy
// However, no Deep Copy possible!!!

// 2) Array
console.log("1.1) Copying an Array using the Spread Operator")
const exampleArrayObject = [{eatingTime: 'Breakfast'}, 'Avocado', 'Peanuts',  {address: {city: "Ohio", country: "GER"}}];
const copyExampleArrayObject = [ ...exampleArrayObject];
console.log(exampleArrayObject);
console.log(copyExampleArrayObject);

// Modify
const copyExampleArrayObjectModified = [ ...exampleArrayObject, 'Avocado'];
console.log(copyExampleArrayObjectModified);
// OUTPUT: only one array was changed

console.log("1.2) Copying an Object using the Spread Operator")
// Data
const exampleObject = {
    name: 'Johannes Metzger',
    address: {
        city: 'Stuttgart',
        province: 'BW',
        country: 'GER'
    },
    runFunction: () => {},
    undef: undefined
}


const copyExampleObject = { ...exampleObject}; // Creates a real shallow copy
console.log(exampleObject);
console.log(copyExampleObject);

// Modify
const copyExampleObjectAndModify = { ...exampleObject, height: 1.92};
console.log(copyExampleObjectAndModify);
// OUTPUT: WARNING! First layer was copied correctly, but not the deeper ones!!!

// 2) DEEP COPY
// Is not possible with the spread operator
// Therefore only possible with the dedicated approaches explained in the:
    // coyping-arrays.js
    // copying-objects.js