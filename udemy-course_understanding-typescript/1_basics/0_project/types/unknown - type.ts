// UNKNOWN TYPE
// Is worse than union type
// Is more specific then any type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// userName = userInput // Throws an compilation error, because userInput could be a string or an number

// An alternative solution would be to
// 1) Use if check to specify that string is only possible
if (typeof userInput === "string") {
  userName = userInput;
}
// 2) Use any type is used, this error would not appear - any disables all type compilation errors
