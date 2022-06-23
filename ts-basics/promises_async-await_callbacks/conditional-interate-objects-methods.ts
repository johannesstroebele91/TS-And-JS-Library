// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator

// 1. example
// console.log() does not exectue all steps of an generate function
// BUT only until the first yield e.g. 1 statement
function* generate() {
  console.log("before 1");
  yield 1;
  console.log("before 2");
  yield 2;
  console.log("before 3");
  yield 3;
}

let result = generate();
console.log(result); // [LOG]: { "value": 1, "done": false }
console.log(result.next());
console.log(result.next()); // [LOG]: { "value": 2, "done": false }
console.log(result.next());
console.log(result.next()); // [LOG]: { "value": undefined, "done": true }

const obj = {
  [Symbol.iterator]: generate,
};

for (const val of generate()) {
  console.log(val);
}

for (const val of obj) {
  console.log(val);
}

// 2. example
// An async iterator enables to do the exact same as before
// BUT only return the value if the promise is fulfilled
// e.g. Promise.resolve("hello")
const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield Promise.resolve("hello");
    yield "async";
    yield "iteration!";
  },

  *[Symbol.iterator]() {
    yield Promise.resolve("hello");
    yield "async";
    yield "iteration!";
  },
};

(async () => {
  for (const x of myAsyncIterable) {
    console.log(x);
    // expected output:
    //    "hello"
    //    "async"
    //    "iteration!"
  }
})();
