// 1) Explanation
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

// 2) Example
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

// 3) Chaining
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

// 4) Run promises in parallel
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

// 5) Promises rules
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
