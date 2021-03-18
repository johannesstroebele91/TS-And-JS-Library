// HOW TO MAKE AN COPY OF AN ARRAY OR OBJECT
// If we DON'T WANT TO AFFECT THE ORIGINAL ARRAY OR OBJECT

// A) SHALLOW COPY
// DOES NOT WORK AS EXPECTED, only first layer works, but no deeper layers!
// Only copy the reference (first layer) of the object from the original
// THEREFORE NO REAL COPY, JUST ANOTHER REFERENCE TO THE SAME OBJECT!
console.log('***SHALLOW COPY***');

// Spread operator "..."
// Most easy way to create a shallow copy
// However, no Deep Copy possible!!!
// 1) Object
const exampleObject = {
    name: 'Firstname Lastname',
    address: {
        city: 'malolos',
        province: 'bulacan',
        country: 'PH'
    },
    runFunction: () => {},
    undef: undefined
}

const copyExampleObject = { ...exampleObject};
console.log(exampleObject);
console.log(copyExampleObject);

// Modify
const copyExampleObjectAndModify = { ...exampleObject, newKey:'newKey'};
console.log(copyExampleObjectAndModify);

// 2) Array
const exampleArrayObject = [{eatingTime: 'Breakfast'}, 'Avocado', 'Peanuts',  {address: {city: "Ohio", country: "GER"}}];
const copyExampleArrayObject = [ ...exampleArrayObject];
console.log(exampleArrayObject);
console.log(copyExampleArrayObject);

// Modify
const copyExampleArrayObjectModified = [ ...exampleArrayObject, 'Avocado'];
console.log(copyExampleArrayObjectModified);
