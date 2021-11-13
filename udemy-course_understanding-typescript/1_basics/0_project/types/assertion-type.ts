// TYPE ASSERTION
// Note that a type assertion does not carry any type casting!!!!!
// It only tells the compiler which type
// it should apply to a value for the type checking purposes.

// Two methods
// 1) Using the angular bracket <> syntax
let code: any = 123; // Compiler shows it is any!
console.log(typeof code); // HAS NOTHING TO DO WITH THE TYPE
let employeeCode = <number>code; // Compiler shows it is a number due to <number>!
console.log(typeof employeeCode); // HAS NOTHING TO DO WITH THE TYPE

// 2) Using the 'as' syntax
let codeAlternative: any = 123; // Compiler shows it is any!
console.log(typeof codeAlternative);
let employeeCodeAlternative = code as number; // Compiler shows it is a number due to as number!
console.log(typeof employeeCodeAlternative); // HAS NOTHING TO DO WITH THE TYPE
