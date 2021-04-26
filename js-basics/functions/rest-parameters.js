// CCESS FUNCTION PARAMETERS USING REST PARAMETERS
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
