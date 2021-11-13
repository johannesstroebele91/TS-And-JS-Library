// RETURN TYPE
// Can be stated either explicitly (`function add():number{}`or implicitly/inferred (function add(){})

function add(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add(1, 2));

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));
