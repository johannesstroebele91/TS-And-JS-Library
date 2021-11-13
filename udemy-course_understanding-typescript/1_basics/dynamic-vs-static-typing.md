# Dynamically typing

type is associated with the value, and checked at run-time

- used by JS
- Type annotations e.g. `(a: number)` are added
- All type checks are performed in a runtime, only when your program is executing.
- So this means you can just assign anything you want to the variable and it will work
- Faster prototyping, because you don't care about types.

# Static typing

- type is associated with variable or textual expression, and checked at compile-time
- all type checks will be performed during compile/build run
- before we actually execute our program
- you can specify variable type manually or it may be calculated automatically (a = 5 - type inference number)
- Type inference refers to the automatic detection of the type of an expression in a formal language
- omit type annotations and still the code is static type checked (altough it looks like the dynamic typed code)
- Richer code completion, because you know all methods for all variables right away
- Better maintainability, you only need a type definition to understand what something is doing
  - e.g. API response type definition, function params, and return type
- Easier to catch simple errors like mistypes (users vs usrs)
- JS can also detect type errors, but only at runtime with statements like this e.g. typeof showResult === "boolean"
