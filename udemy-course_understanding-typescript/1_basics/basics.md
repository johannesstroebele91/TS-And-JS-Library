# Basics

- is a JS superset (language build on top of JS)
- adds new features to JS
- Browsers can't exectue TS directly (similar to Node.js)
  - TS can be compiled to JS
  - is is done by TS features being compiled to JS "workarounds"
  - so it is practically just syntactically sugar
  - also it adds types to JS (for identifying type errors in code earlier)
  - e.g. JS: '2' + '3' = '23' -> if passed to function this is easy to oversee

# Advantages

- easier to understand and less error-prone due to types (but more explicit)
- get better autocompletion and error detection in IDEs
- using next.gen javascript features but use them in older browser
- use non-JS features (e.g. interfaces and generics)
- gives meta-programming features (e.g. decorators)
- is highly configurable (make it stricter or looser)

# TypeScript only helps during development

- It does not change how compiled JS works at runtime
- because browsers have no TS support
- ONLY blocks compilation when in STRICT MODE
