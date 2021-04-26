// Class is a template or blueprint for creating objects

// Class Members
// 1) Property: variables attached to classses
    // Static properties: variables that can be accessed WITHOUT instantiating the class
    // Public properties: variables that can be accessed ONLY WHEN the class is instantiated
    // Private properties: can be accessed ONLY INSIDE a class
// 2) Methods: functions attached to classses

class Person {

    // Class Property
    // name does not need to be declared here in js! but in ts!
    // Constructor: executed when class is initialized
    constructor() {
        this.name = 'Max';
    }

    // Class Method
    printMyName() {
        console.log('This method is for printing the name: ' + this.name)
    }
}

// Class Instantiation
const person = new Person();
person.printMyName();
console.log('The variable max has the following value: ' + person.name);