// Several issues and how scopes are used in JavaScript
// A) GENERAL SCOPE BEHAVIOUR
// B) HOISTING

// A) GENERAL SCOPE BEHAVIOUR
// FUNCTION
function test() {
    var nice = 'nice';
}

console.log(nice);
// OUTPUT: ReferenceError: nice is not defined

// BLOCK SCOPE
if (true) {
    var testVar = 'test';
}
console.log(testVar);
// OUTPUT: executes successfully, but is not good!

// FOR LOOP
for (var i = 1; i < 4; i++) {
    console.log(i);
}
// OUTPUT: 1, 2, 3
// Bad to use VAR -> let should be used!!!!

// FOR LOOP
// WARNING: for loop is finished before console.log
for (var i = 1; i < 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, 500)
}
// OUTPUT: 3, 3, 3

// FOR LOOP
// 1) SOLUTION
for (let i = 1; i < 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, 500)
}
// OUTPUT: 1, 2, 3

// FOR LOOP
// 2) SOLUTION
for (var i = 1; i < 4; i++) {
    (function test(o){
        console.log(o);
    })(i)
}
// OUTPUT: 1, 2, 3
// Bad to use VAR -> let should be used!!!!


// B) HOISTING
// JS moves all declarations to the top of the current scope

// VAR
console.log(testVar);
var testVar = 'test VAR ';
// OUTPUT: undefined, but executes successfully (rather bad practice)

// LET
console.log(testLet)
let testLet = 'testLet';
// OUTPUT: Does not RUN and ReferenceError: Cannot access 'testLet' before initialization

// FUNCTION
testHoisting();
function testHoisting() {
    console.log('I am a function');
}
// OUTPUT: Successful executing, because all declarations are executed before executing the rest (like function calls)
