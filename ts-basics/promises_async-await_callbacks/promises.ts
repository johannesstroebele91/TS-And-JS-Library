/* STRUCTURE
 1. CALLBACKS
 2. PROMISES
 3. ASYNC/AWAIT */

// RELEVANCE
/* JS enables execute operations simultaneously
* in order to do something with the time
* e.g. a HTTP request, ... needs for executions

The concepts include Callback functions,
 * Promises and the use of Async, and Await
 * to handle delayed operations in JavaScript */

// 1) CALLBACKS
// 1.1) Explantion
/* In JavaScript, functions are objects.
* So we can pass objects to functions as parameters.
* We can also pass functions as parameters to other functions
* and call them inside the outer functions
-> when the first function is done, run the second one */

// 1.2) Examples
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

// 1.3) Problems with Callback
/* It creates something called “Callback Hell.”
 * because, you start nesting functions
 * within functions within functions */

// 2) PROMISES as a solution
// 2.1) Explanation
/* Promises enable to guarantee that
 * something is done in the future

For example, when we request data
* from the server by using a Promise,
* it will be in pending mode until we receive our data

3 states of the Promise object
* Pending: Initial State, before the Promise succeeds or fails.
* Resolved: Completed Promise
* Rejected: Failed Promise, throw an error

JavaScript is designed to
* not wait for an asynchronous block of code
* to completely execute before other synchronous parts of the code can run
*/

// 2.2) Example
const myFirstPromise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    setTimeout(function () {
      resolve("Promise is resolved!"); // fulfilled
    }, 300);
  } else {
    reject("Promise is rejected!");
  }
});

// To use the above create Promise we use then() for resolve and catch() for reject.
const demoPromise = function () {
  myFirstPromise
    .then((successMsg) => {
      console.log("Success:" + successMsg);
    })
    .catch((errorMsg) => {
      console.log("Error:" + errorMsg);
    });
};

demoPromise();

// 2.3) Chaining
/* Sometimes calling multiple asynchronous requests is needed,
* then after the first Promise is resolved (or rejected),
* a new process will start
to which we can attach the promise directly by a method called chaining */

// Creates a new promise
const helloPromise = function () {
  return new Promise(function (resolve, reject) {
    const message = `Hi, How are you!`;

    resolve(message);
  });
};

// Chain the promises like this
const demoPromiseChained = function () {
  myFirstPromise
    .then(helloPromise)
    .then((successMsg) => {
      console.log("Success:" + successMsg);
    })
    .catch((errorMsg) => {
      console.log("Error:" + errorMsg);
    });
};

demoPromiseChained();

// 2.4) Run promises in parallel
/* Promise.all() and Promise.race() are two composition tools
* for running asynchronous operations in parallel

For Promises.all
* an array of promises needs to be created (e.g. Promise.all(promisesArray)
* or the promises written subsequently (e.g. Promise.all(promise1, promise2, promise3)) */

const func1 = () => {
  console.log("hello");
};
const func2 = func1;
const func3 = func2;

Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  /* use result1, result2 and result3 */
});

// 2.5) Promises rules
/* Ref: 
* Use promises whenever you are using asynchronous or blocking code.
* resolve maps to then and reject maps to catch for all practical purposes.
* Make sure to write both .catch and .then methods for all the promises.
* If something needs to be done in both cases use .finally.
* We only get one shot at mutating each promise.
* We can add multiple handlers to a single promise.
* The return type of all the methods in the Promise object,
  * regardless of whether they are static methods or prototype methods,
  * is again a Promise.
* In Promise.all,
  * the order of the promises are maintained in the values variable,
  * irrespective of which promise was first resolved. 
* Promise.resolve() and Promise.reject() are shortcuts to
  * manually create an already resolved
  * or rejected promise respectively */

// 3) ASYNC/AWAIT
// 3.1) Explanation
/* Await is syntactic sugar for Promises
 * to make the asynchronous code
 * look more like synchronous/procedural code
 * which is easier to understand by humans

Await makes it easier because
* it blocks the execution of the code
* within the async function in which it is located
* therefore enabling to wait for each promise until it is returned
* before executing the next function */

async function printMyAsync() {
  await printString();
  await printString();
  await printString();
}

/* Therefore, await eliminates the need for
 * callbacks in .then() and .catch()
 * operations that were marked with await */

// 3.2) Example
async function demoPromiseAsyncAwait() {
  try {
    let message = await myFirstPromise;
    message = await helloPromise();
    console.log(message);
  } catch (error) {
    console.log("Error:" + error.message);
  }
}

// finally, call our async function

(async () => {
  await demoPromiseAsyncAwait();
})();

// 3.3) Rules
/* Reference: https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789#:~:text=Promise%20creation%20starts%20the%20execution,have%20any%20effect%20on%20it.
* async functions return a promise.
* async functions use an implicit Promise to return results
  * Even if you don’t return a promise explicitly,
  * the async function makes sure that your code is passed through a promise.
* await blocks the code execution within the async function, of which it (await statement) is a part.
* There can be multiple await statements within a single async function.
* When using async await, make sure you use try catch for error handling.
* Be extra careful when using await within loops and iterators
  * You might fall into the trap of writing sequentially-executing code
  * when it could have been easily done in parallel.
* await is always for a single Promise.
* Promise creation starts the execution of asynchronous functionality.
* await only blocks the code execution within the async function
  * It only makes sure that the next line is executed when the promise resolves
  * So, if an asynchronous activity has already started, await will not have any effect on it.

// 4) Difference promise and async/await
const coffeeImg = fetch("coffee.jpg").then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.blob();
});
