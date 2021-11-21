// 1) Explanation
// 1.1) async explanation
/* The async keyword is
 * put in front of a function declaration
 * to return a promise rather than directly returning the value */

async function hello1() {
  return "Hello1";
}
console.log(hello1());

// Consume the value returned when the promise fulfills .then()
hello1().then((value) => console.log(value));
console.log(await hello1());
hello1().then(console.log);

// 1.2) await explanation
/* The await expression causes async function execution
  * to pause until a Promise is settled
  * (that is, fulfilled or rejected),
  * and to resume execution of the async function after fulfillment.

When resumed,
* the value of the await expression is that
* of the fulfilled Promise

Therefore await is syntactic sugar for Promises
 * to make the asynchronous code
 * look more like synchronous/procedural code
 * which is easier to understand by humans */

/* The await keyword only works inside async functions
 * Without await, async function have no advantage over promises
 * You can use await when calling any function that returns a Promise,
 * including web API functions */

// Short example
async function hello() {
  return await Promise.resolve("Hello");
}

hello().then(alert);

// Long example
async function printMyAsync() {
  await printString();
  await printString();
  await printString();
}

/* Therefore, await eliminates the need for
 * callbacks in .then() and .catch()
 * operations that were marked with await */

// 2) Example
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

// 3) Rules
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
 * So, if an asynchronous activity has already started, await will not have any effect on it. */

// 4) Promises vs async/await
// 4.1) Example promises
const img = fetch("coffee.jpg")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.blob();
  })
  .then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(
      "There has been a problem with your fetch operation: " + e.message
    );
  });

// 4.2) Example async/await
async function myFetch() {
  let response = await fetch("coffee.jpg");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement("img");
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch().catch((e) => {
  console.log(
    "There has been a problem with your fetch operation: " + e.message
  );
});
