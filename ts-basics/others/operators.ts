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
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
