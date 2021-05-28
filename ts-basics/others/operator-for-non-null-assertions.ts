/* A new ! post-fix expression operator may be used to assert
that its operand is non-null and non-undefined
in contexts where the type checker is unable to conclude that fact.

Specifically, the operation x! produces a value of the type of x with null and undefined excluded.
Similar to type assertions of the forms <T>x and x as T,
the ! non-null assertion operator is simply removed in the emitted JavaScript code.

Reference: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html
*/

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
