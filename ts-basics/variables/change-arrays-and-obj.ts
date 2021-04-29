// 1) Arrays
const exampleArrayNumbers: number[] = [1,2,3];
const exampleSmallNumber = 2;

const newArrayNumbers = [exampleSmallNumber, ...exampleArrayNumbers, 1,2,3]
console.log(newArrayNumbers);

// 2) Objects
const exampleObjPerson = {
    name: 'Max',
    age: 32
}
console.log(exampleObjPerson);

// 2.1) EMBEDDING OBJ WITH SPREAD OPERATOR
// object is embedded at the first layer
const exampleObjEmployeesSpreaded = {
    ...exampleObjPerson,
    education: "University"
}
console.log(exampleObjEmployeesSpreaded);

// 2.2) EMBEDDING OBJ WITHOUT THE SPREAD OPERATOR
// object is embedded at the second layer
// and not the first
const exampleObjEmployees = {
    exampleObjPerson,
    education: "University"
}
console.log(exampleObjEmployees);
