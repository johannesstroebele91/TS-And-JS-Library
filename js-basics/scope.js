// FUNCTION
function test() {
    var nice = 'nice';
}

console.log(nice);
// OUTPUT: ReferenceError: nice is not defined

// BLOCK SCOPE
if (true) {
    var test = 'test';
}
console.log(test);
// OUTPUT: executes successfully, but is not good!

// FOR LOOP
for (var i = 1; i < 4; i++) {
    console.log(i);
}
// OUTPUT: 1, 2, 3

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
