// Type casting using "as"
const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number): number {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  // + converts value to number
  return +num1 + +num2;
}

// input element is always an string
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
