/* Await
* The await expression causes async function execution
* to pause until a Promise is settled
* (that is, fulfilled or rejected),
* and to resume execution of the async function after fulfillment.

When resumed,
* the value of the await expression is that
* of the fulfilled Promise */ 

function resolveAfter2Seconds(x: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  f1();

