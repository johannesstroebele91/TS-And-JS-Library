# TYPES

number: `1`,`5.3`, `-10` (no integer and floats)
string: `"Hi"`, `'Hi'`, `Hi` ( allows to write template literals, strings where you can dynamically inject data into)
boolean: `true`, `false` - `0 === false` (everything becomes truthy and falsy in the end)
object: `{age: 30}` any JS object, but specific types possible (type of object) - properties, constructor, class
arrays: `[1,2,3]` any JS array, type can be flexible or strict (based on the element types)
tuples: `[1,2]` is a fixed length and fixed type array (does not exist in JS)
enums: `enum {NEW, OLD}` automatically enumerated global constant identifiers (does not exist in JS)
any: `*` any lind of value, no specific assignment
literals: specify only exactly certain values of a certain type the field should hold (e.g. resultConversion: "as-number" | "as-text")
aliases: save complex types in variables for easier reuse and avoiding repetition (e.g. type conversionLiteral = "as-number" | "as-text")

# Issues without TS

- Easy to miss type conversion errors
- if passed to function
- e.g. `'2' + '3' = '23'` OR (creates a concatenated string)
- e.g. `'2' + 3 = '23'` (even if one parameter is a number, a string will still be created)

# typeof

Enables to check which type a value is in typescript

- ALWAYS write the respective type in string laterals
- e.g. `if(typeof value === 'string'){}`
