/* In JavaScript, there are two main ways to handle asynchronous code:
1) then/catch (ES6)
2) async/await (ES7) */

// Reference: https://www.smashingmagazine.com/2020/11/comparison-async-await-versus-then-catch/

// For example, let’s instantiate a simple Promise:
const greeting = new Promise((resolve, reject) => {
  resolve("Hello!");
});

// 1) then/catch
// 1.1) Using then, catch and finally, we could perform a series of actions based on whether the Promise is resolved (then) or rejected (catch)
greeting
  .then((value) => {
    console.log("object");
  })
  .then((value) => {
    console.log();
  })
  .catch((value) => {
    console.log("rejected");
  });

greeting
  .then((value) => {
    console.log("The Promise is resolved!", value);
  })
  .catch((error) => {
    console.error("The Promise is rejected!", error);
  })
  .finally(() => {
    console.log(
      "The Promise is settled, meaning it has been resolved or rejected."
    );
  });

// 1.2) Chaining multiple then methods
// it allows us to perform successive operations on ONE resolved Promise
// so there are not multiple promises, but just multiple operations
// that are performed one after another
fetch(
  "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json"
)
  .then((response) => response.json())
  .then((data) => {
    return {
      data: data,
      status: this.response,
    };
  })
  .then((res) => {
    console.log(res.data, res.status);
  });

// 2) async and await
// async keyword is used for function declaration
// to signify that it returns a Promise
// await, meanwhile, is used before a Promise
async function doSomethingAsynchronous() {
  try {
    const value = await greeting;
    console.log("The Promise is resolved!", value);
  } catch (error) {
    console.error("The Promise is rejected!", error);
  } finally {
    console.log(
      "The Promise is settled, meaning it has been resolved or rejected."
    );
  }
}

// when returning a Promise inside an async function,
// you don’t need to use await
async function getGreeting() {
  return greeting;
}
console.log(getGreeting());
