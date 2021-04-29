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
// 2.1) GENERICS IN FUNCTIONS
// Most often called "T" or "Type"
// Improves the inference of types for functions
function insertAtBeginningGenerics<T>(array: T[], value: T) {
    return [value, ...array];
}
const newArrayNumbersGeneric = insertAtBeginningGenerics([1,2,3], -1);
// Output: infers the number format correctly

// 2.2) GENERICS WITH ARRAYS
let exampleArrayNumbersGenerics: Array<number> = [1, 2, 3];
// angle brackets (<>) were NOT used to create our own type "T"
// BUT to tell TypeScript which actual type should be used for the "generic type placeholder" 
// Which was "T" in section 2.1)

// BECAUSE IT IS A ANNOYING to write this rather long and clunky generic type annotation,
// there is alternative (syntactic sugar) for arrays
// Which is smaller and does the same thing
let exampleArrayNumbersSyntacticSugar: number[] = [1, 2, 3];

// 2.3) EXPLICIT GENERICS 
/* TODO needs fixing 
const stringArraySyntacticSugar = insertAtBeginning<string>(['a', 'b', 'c'], 'd');
const stringArrayGeneric = insertAtBeginning<Array<string>>(['a', 'b', 'c'], 'd');
*/