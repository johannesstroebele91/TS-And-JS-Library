// 1) WITHOUT GENERICS
function insertAtBeginning(array: any[], value: any) {
    return [value, ...array];
}

const newArrayAnyTransformed = insertAtBeginning([1,2,3], -1); 
console.log(newArrayAnyTransformed); // Output: has the any format
// Problem: should infer that the array returned is of format number!
// Solution: using Generics 
const newArrayNumbersTransformed: number[] = insertAtBeginning([1,2,3], -1); 
console.log(newArrayNumbersTransformed); // Output: has the number format
// BUT TYPE IS NOT INFERRED BUT ASSIGNED!!!

// 2) WITH GENERICS
// Most often called "T" or "Type"
// Improves the inference of types for functions
function insertAtBeginningGenerics<T>(array: T[], value: T) {
    return [value, ...array];
}
const newArrayNumbersGeneric = insertAtBeginningGenerics([1,2,3], -1);
// Output: infers the number format correctly