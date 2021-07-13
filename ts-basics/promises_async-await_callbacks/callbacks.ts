// 1) Explantion
/* In JavaScript, functions are objects.
* So we can pass objects to functions as parameters.
* We can also pass functions as parameters to other functions
* and call them inside the outer functions
-> when the first function is done, run the second one */

// 2) Examples
// setTimeout funcion is an important one that delays function execution
// Normal function
function printString() {
  console.log("Tom");
  setTimeout(() => {
    console.log("Jacob");
  }, 300);
  console.log("Mark");
}

printString();

// Arrow function
function printStringArrowFunc() {
  console.log("Tom");
  setTimeout(() => {
    console.log("Jacob");
  }, 300);
  console.log("Mark");
}

printStringArrowFunc();

// 3) Problems with Callback
/* It creates something called “Callback Hell.”
 * because, you start nesting functions
 * within functions within functions */
