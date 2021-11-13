// Type casting using "as"
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
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
