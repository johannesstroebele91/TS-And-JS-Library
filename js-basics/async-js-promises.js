/* SOLUTIONS
 A) "PROMISES"
 B) "ASYNC/WAIT" */

/* UNDERLYING PROBLEM
 * Async JS or JS that uses callbacks are not intuitively
 * Issues appear if a lot of async functions are dependent on each other
 * like in the example below:
 */
asyncFunctionA(param1, param2, function () {
  // Async function B ist dependent on the function A
  asyncFunctionB(dataFromA, function () {
    // Async function C ist dependent on the function B
    asyncFunctionC(dataFromB, function () {});
  });
});

/* A) PROMISES
 * used to handle async innovations more easily
 * uses 3 different states to achieve this:
 * pending: initiate state
 * fulfilled: if promise is successful
 * rejected: if promise has some errors */

// 1) Simple Example
console.log("PROMISES");
console.log("Simple Example");
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("fulfilled");
  }, 500);
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// 2) Better Example
// run a function after 500ms
console.log("Better Example");

function calculateSquareArea(width, height) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (width == null || height == null) {
        reject("Calculation is rejected");
      } else {
        resolve("Square size: " + width * height);
      }
    }, 500);
  });
}

function onFulFilled(data) {
  console.log("onFulFilled:", data);
}

function onRejected(reason) {
  console.log("onRejected:", reason);
}

// OUTPUT: resolved, because suitable parameters for the functions were provided
calculateSquareArea(5, 5).then(onFulFilled, onRejected);

// OUTPUT: rejected, because unsuitable parameters for the functions were provided
calculateSquareArea(5, null).then(onFulFilled, onRejected);

// OUTPUT: Catch: Calculation is rejected
// Catch is a BETTER PRACTICE, because it catches errors not only in the onRejected, but also onFulFilled
// e.g. onFulFilled error is caught -> "Catch:  ReferenceError: someFalseVariable is not defined at onFulFilled "
calculateSquareArea(5, 5)
  .then(onFulFilled)
  .catch((reason) => {
    console.log("Catch: ", reason);
  });

// 3) HANDLING MULTIPLE PROMISES
// 3.1) Promise.all(myPromises)
const myPromises = [
  new Promise((resolve, reject) => setTimeout(resolve, 500)),
  new Promise((resolve, reject) => setTimeout(resolve, 500)),
  new Promise((resolve, reject) => setTimeout(resolve, 500)),
];

function onFulFilledTwo(data) {
  console.log("onFulFilled:", data);
}

// Promise.all waits for the all promises to be fulfilled
// OUTPUT: onFulFilled: [ undefined, undefined, undefined ] -> for each Promise undefined was returned
// If one Timeout is rejected (setTimeout(reject, 500), it "catch:  undefined" is the Output
Promise.all(myPromises)
  .then(onFulFilledTwo)
  .catch((reason) => {
    console.log("catch: ", reason);
  });

// 3.2) Promise.allSettled(myPromises)
// OUTPUT: Promise.all(myPromises)
//     .then(onFulFilledTwo)
//     .catch((reason => {
//         console.log('catch: ', reason);
//     }))
Promise.allSettled(myPromises)
  .then(onFulFilledTwo)
  .catch((reason) => {
    console.log("catch: ", reason);
  });

// 3.3) Promise.any(myPromisesAlternative)
const myPromisesAlternative = [
  new Promise((resolve, reject) => setTimeout(() => reject(100), 100)),
  new Promise((resolve, reject) => setTimeout(() => resolve(200), 200)),
  new Promise((resolve, reject) => setTimeout(() => resolve(300), 300)),
];
/* OUTPUT: ERROR FUNCTION NOT SUPPORTED YET -> IS NOT INCLUDED UNTIL NOW
 * FUTURE OUTPUT: onFulFilled: 200 -> only the second that is fulfilled will be returned -> second promise!
Promise.any(myPromisesAlternative)
    .then(onFulFilledTwo)
    .catch((reason => {
        console.log('catch: ', reason);
    })) */

// 3.4) Promise.race(myPromisesAlternative)
// OUTPUT: catch:  100 -> first will be returned, because doesn't matter if resolved or rejected
Promise.race(myPromisesAlternative)
  .then(onFulFilledTwo)
  .catch((reason) => {
    console.log("catch: ", reason);
  });

/* APIs available for Promises
 * paramFunction(resolve, reject) - resolve if fulfilled, reject if rejected
 * Constructor used to wrap functions that do not support promises
 * Promise.resolve(value) returns a new Promise object that is resolved with the given value
 * Promise.reject(reason) returns a new Promise object that is rejected with the given value
 * Promise.all(iterable) wait for all promises to be resolved or for any to be rejected
 * Promise.all(iterable) wait for all promises to be resolved or for any to be rejected
 * Promise.allSettled(iterable) wait until all promises have settled (finished so either resolved or rejected)
 * Promise.any(iterable) as soon as one of the promises in the iterable fulfills (resolved),
 * a single promise that resolve with the value from that promise is RETURNED
 * Promise.race(iterable) wait until any of the promises is resolved or rejected
 * instead of the Promise.any it will check for not only resolved, but also rejected promises */

/* How to catch the data or the errors using instance methods
 * then(onFulfilled, onRejected) called after the promise is done executing
 * onFulfilled - a function that will be called when the Promise is fulfilled
 * onRejected - a function that will be called when the Promise is rejected
 * catch(reason) called when the promise is rejected AND
 * when an onRejected in the then function is not present
 * This will also catch errors when an error occurs in onFulFilled and onRejected
 * IMPORTANT: catch is preferred to onRejected!
 * finally() - called either if the promise is fulfilled or rejected
 * does not have any parameters
 * so if something needs to be done to the returned data, "then" should be used after the catch */

/* B) ASYNC/WAIT
 * Alternative for Promises
 * used to handle async functions
 * "async" keyword needs to be added before function
 * "await" keyword waits for an asynchronous invocation to finish before executing the next codes
 * cleaner style than Promise as you do not need to do chaining that much
 * async function also return a Promise, therefore it can be chained */

// 1) Basic example
async function callerAsync() {
  const dataFromAsync = await ajaxCall();
  return dataFromAsync + "my name";
}

// 2) Better example
let someNumber = 5;

function changeNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      someNumber = 10;
      resolve(someNumber);
    }, 500);
  });
}

async function startChangeAsync() {
  await changeNumber();
  console.log("Some number async: ", someNumber);
}
startChangeAsync();
// OUTPUT: 10, BUT without async and await keyword 5 will be the output (because not waiting)

let otherNumber = 5;
function startChangstartChangeDirectly() {
  otherNumber = 10;
  console.log("Some number directly: ", otherNumber);
}
startChangstartChangeDirectly();
// OUTPUT: 10, instead of async 5!
