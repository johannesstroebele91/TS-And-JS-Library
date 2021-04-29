/* If you copy a object 
 * a new pointer is created
 * and not a new pointer and value!
 * SO, both objects point to the same values 
 -> changing the value of one object
 -> will changed the value for the other one, too */

 // 1) EXAMPLE Array
 let exampleArray = [1];
 let copyExampleArray = exampleArray;
 copyExampleArray.push(2);
 console.log(exampleArray); // OUTPUT: [1,2]
 console.log(copyExampleArray); // OUTPUT: [1,2]
 // WARNING: Both the exampleArray and the copyExampleArray are changed!!!
 
 // 2) EXAMPLE Object
 // WARNING: only the reference was copied
 let sampleObj = { name: "Rysh", test: "one" };
 let copySampleObj = sampleObj;
 
 sampleObj.test = "Peter";
 sampleObj.name = "Hello";
 console.log("sampleObj", sampleObj); // OUTPUT: sampleObj { name: 'Hello', test: 'Peter' }
 console.log("copysampleObj", copySampleObj); // OUTPUT: sampleObj { name: 'Hello', test: 'Peter' }
 