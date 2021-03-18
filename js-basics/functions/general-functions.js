// A) ALTERNATIVE TO TRADITIONAL FUNCTIONS "ARROW FUNCTIONS"
// B) ACCESS FLEXIBLE AMOUNT OF FUNCTION PARAMETERS "REST PARAMETERS"

// A) ALTERNATIVE TO TRADITIONAL FUNCTIONS "ARROW FUNCTIONS"
// Executes in the scope they are created (does not default the "this" object to the window scope)
/* Compact alternative, but has LIMITATIONS such as:
    * Not having its own bindings to this and super
    * Does not have arguments, or new.target keywords
    * Not suitable for call, apply and bind methods, which generally rely on establishing a scope
    * Can be used as constructors
    * Can not use yield, within its body (e.g. for generators) */
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length)); // OUTPUT: Array [8, 6, 7, 9]
// "material" is the input parameter that is used



// B) ACCESS FUNCTION PARAMETERS USING REST PARAMETERS
// Allow to represent an indefinite number of arguments as an array with spread operator
function sum(...someArgs) {
    // Reduce function
    // executes a reducer function (that you provide) on each element of the array, resulting in single output value (iterates)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    return someArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 5, 3, 562, 34));
console.log(sum(2, 3, 2, 1, 2, 5, 3, 2, 3, 1,));

function lengthArray(...someArgs) {
    return someArgs.length; // Output:
}

console.log('Length of an array: ' + lengthArray(2, 3, 2, 1, 2, 5, 3, 2, 3, 1,));

// Can use array function while arguments cannot
function useArguments(a, b) {
    // for accessing the parameters or arguments provided to the function
    console.log('Access arguments provided to the function: ' + arguments[0]);
}

useArguments(1, 5);
