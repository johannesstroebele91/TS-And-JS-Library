({
  babel: true,
});

/* 1) Non-null assertion operator (!)
Reference: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html

A new ! post-fix expression operator may be used to assert
that its operand is non-null and non-undefined
in contexts where the type checker is unable to conclude that fact.

Specifically, the operation x! produces a value of the type of x with null and undefined excluded.
Similar to type assertions of the forms <T>x and x as T,
the ! non-null assertion operator is simply removed in the emitted JavaScript code. */

interface Entity {
  name: string;
}

// Compiled with --strictNullChecks
function validateEntity(e?: Entity) {
  // Throw exception if e is null or invalid entity
}
function processEntity(e?: Entity) {
  validateEntity(e);
  let s = e!.name; // Assert that e is non-null and access name
}

/* 2) Nullish coalescing operator (??)
Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

A logical operator
* that returns its right-hand side operand
* when its left-hand side operand is null or undefined

This can be contrasted with the logical OR (||) operator,
* which returns the right-hand side operand
* if the left operand is any falsy value, not only null or undefined */

const foo = null ?? "default string";
console.log(foo);
// returns "default string"

const baz = 0 ?? 42;
console.log(baz);
// returns 0

// 3) Nullish coalescing operator vs OR operator (||)
const cannotBeZero = 0 || 5;
console.log(cannotBeZero); // returns 5
const canBeZero = 0 ?? 5;
console.log(canBeZero); // returns 0

// 4) Chaining `.` and optional chaining `?.` operator
// Optional chaining solve errors like TypeError: Cannot read property ‘foo’ of null
const book = { id: 1, title: "Title", author: null as number };
/* JavaScript Examples
console.log(book.author.age); // throws error
console.log(book.author && book.author.age); // 1) chaining returns null, but throws error
console.log(book.author && book.author?.age); // 2) optional chaining returns null, but only an error because object is known (not for database values)
console.log(book.author?.address?.city); // 3) deep optional chaining returns undefined */

const personOptionalChaining = {
  firstName: "Haseeb",
  lastName: "Anwar",
  printName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(personOptionalChaining.printName()); // returns 'Haseeb Anwar'
// console.log(personOptionalChaining.doesNotExist?.()); // returns undefined

// 5) Convert String to an Integer
const someTextString = "123";
console.log(+someTextString); // returns an integer 123
console.log(typeof +someTextString); // returns 'number'

// 5) Convert a Number to a String
const myString = 25 + "";
console.log(myString); // returns '25'
console.log(typeof myString); // returns 'string'

// 6) Boolean Coversion using the `!!` operator
const greeting = "Hello";
console.log(!!greeting); // returns true
const noGreeting = "";
console.log(!!noGreeting); // returns false

// 7) Typeof Type operator
// Prints "string"
let s = "hello";
let n: typeof s;
