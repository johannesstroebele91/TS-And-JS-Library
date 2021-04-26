// Class is a template or blueprint for creating objects

// Class Members
// 1) Property: variables attached to classses
    // Static properties: variables that can be accessed WITHOUT instantiating the class
    // Public properties: variables that can be accessed ONLY WHEN the class is instantiated
    // Private properties: can be accessed ONLY INSIDE a class
// 2) Methods: functions attached to classses

class Person {
    name = 'Max'; // Property
    call = () => { /* ... */ } // Method
}

// Class Instantiation
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);
// Constructor: executed when class is initialized
// Super: for calling base class attributes
