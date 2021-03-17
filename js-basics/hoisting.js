// VAR
console.log(testVar);
var testVar = 'test VAR ';
// OUTPUT: undefined, but executes successfully (rather bad practice)

// LET
console.log(testLet)
let testLet = 'testLet';
// OUTPUT: Does not RUN and ReferenceError: Cannot access 'testLet' before initialization

// FUNCTION
test();
function test() {
    console.log('I am a function');
}
// OUTPUT: Successful executing, because all declarations are executed before executing the rest (like function calls)



