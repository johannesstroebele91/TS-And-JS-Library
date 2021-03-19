// A) SHALLOW COPY: copies only the first layer of an array/object
// B) DEEP COPY: copies all layers of an array/object

// HOW TO MAKE AN COPY OF AN OBJECT
// If we DON'T WANT TO AFFECT THE ORIGINAL OBJECT

// A) SHALLOW COPY
// DOES NOT WORK AS EXPECTED, only first layer works, but no deeper layers!
// Only copy the reference (first layer) of the object from the original
// THEREFORE NO REAL COPY, JUST ANOTHER REFERENCE TO THE SAME OBJECT!
console.log('***SHALLOW COPY***');

// 1) Object:
// "Object.assign()"
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
const copyExampleObjectReference = exampleObject;
const copyExampleObjectShallow = Object.assign({}, exampleObject);
copyExampleObjectShallow.name = 'Peter Pan';
console.log(exampleObject);
console.log(copyExampleObjectReference);
console.log('\n\nShallow copying and change of first layer:');
console.log(copyExampleObjectShallow);
// OUTPUT: Only the shallow copy includes 'Peter Pan' as name AS EXPECTED

console.log('\n\nShallow copying and change of second layer:');
copyExampleObjectShallow.address.city = 'Johannesburg';
console.log(exampleObject);
console.log(copyExampleObjectReference);
console.log(copyExampleObjectShallow);
// OUTPUT: WARNING: Changing the second or deeper layer changes the value for all objects

// 2) Array
// "Array.slice()"
const exampleArray = ['Avocado', 'Peanuts', 'Creme'];
const copyExampleArray = exampleArray;

console.log(exampleArray);
console.log(copyExampleArray);


// 3) Array & Object:
// Spread operator "..."


// B) DEEP COPY
// WORK AS EXPECTED, not only first, but also deeper layers!
// Copy all layers from the object from the original
// And DOESN'T reference any values in the original
console.log('\n\n***DEEP COPY***');

// 1) SOLUTION: JSON.stringify
// WARNING: slow performance, but easy to code
// May sure that object only contains data that JSON understands
// Rest will be lost such as function, new Data(), undefined),
const copyExampleObjectDeep = JSON.parse(JSON.stringify(exampleObject));
copyExampleObjectDeep.name = 'Lisa Lambert';
copyExampleObjectDeep.address.city = 'Wolfenstein';
console.log(exampleObject); // OUTPUT: the same as the original object
console.log(copyExampleObjectDeep); // OUTPUT: as expected the new adapted object across all layers is printed,
// HOWEVER: functions and variables with the value undefined are omitted

// 2) SOLUTION: PACKAGES/LIBRARIES
// Lodash: cloneDeep function
// Jquery: jQuery.extend

// 3) SOLUTION: Create MY OWN function with for loops
