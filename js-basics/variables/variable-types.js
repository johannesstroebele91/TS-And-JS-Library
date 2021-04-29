// TYPES CAN BE EITHER PRIMITIVE OR REFERENCE


// A) PRIMITIVE TYPES
// string, number, bigint, boolean, undefined, symbol
let firstNumber = 1;
let copyFirstNumber = firstNumber;
firstNumber = 2;

console.log(firstNumber); // OUTPUT: 2
console.log(copyFirstNumber); // OUTPUT: 1
// Changing the original and the copy will not affect each other

// Inference of type: number
let sample = 5;
let copySample = sample;
sample = 10;
console.log('sample', sample); // OUTPUT: 5
console.log('copySample', copySample); // OUTPUT: 10

//  B) REFERENCE TYPES
// Object and arrays

/* If you copy a object 
 * a new pointer is created
 * and not a new pointer and value!
 * SO, both objects point to the same values 
 -> changing the value of one object
 -> will changed the value for the other one, too */
let firstArray = [1];
let copyFirstArray = firstArray;
copyFirstArray.push(2);

console.log(firstArray); // OUTPUT: [1,2]
console.log(copyFirstArray); // OUTPUT: [1,2]
// WARNING: Both the firstArray and the copyFirstArray are changed!!!

// Example: Object
// WARNING: only the reference was copied
let sampleName = { name: 'Rysh'};
let copysampleName = sampleName;

sampleName.test = 'Peter';
sampleName.name = 'Hello';
console.log('sampleName', sampleName); // OUTPUT: sampleName { name: 'Hello', test: 'Peter' }
console.log('copysampleName', copysampleName); // OUTPUT: sampleName { name: 'Hello', test: 'Peter' }
