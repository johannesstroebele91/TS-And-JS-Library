// HOW TO MAKE AN COPY OF AN ARRAY OR OBJECT
// If we DON'T WANT TO AFFECT THE ORIGINAL ARRAY OR OBJECT

// A) SHALLOW COPY
// DOES NOT WORK AS EXPECTED, only first layer works, but no deeper layers!
// Only copy the reference (first layer) of the object from the original
// THEREFORE NO REAL COPY, JUST ANOTHER REFERENCE TO THE SAME OBJECT!
console.log('***SHALLOW COPY***');

// Array & Object:
// Spread operator "..."


// B) DEEP COPY
// WORK AS EXPECTED, not only first, but also deeper layers!
// Copy all layers from the object from the original
// And DOESN'T reference any values in the original
console.log('\n\n***DEEP COPY***');

