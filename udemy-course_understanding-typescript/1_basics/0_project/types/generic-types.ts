// GENERIC TYPES
function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
): string {
  if (showResult) {
    console.log("print result");
  }

  console.log(typeof n1);
  if (typeof n1 === "number" && typeof n2 === "number" && showResult) {
    return `${resultPhrase} ${n1 + n2}`;
  } else {
    throw new Error("Incorrect input");
  }
}

// Type inference
const number1: number = 5; // number is redundant! type is assigned explicity, so there is no type inference like const number = 5
let number2: number;
// number2 = 'hello' will throw an compilation error
number2 = 4;
const printResult = true;
const resultPhrase = "Result";

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
