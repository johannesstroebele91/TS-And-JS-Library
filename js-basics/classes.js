// A) BASIC INFO
// B) CLASSES
// C) THIS OBJECT
// D) COMPLICATED OBJECTS

// A) BASIC INFO
// Template or blueprint for creating objects
// Enables to encapsulate data with code to work on that data
// Constructor: executed when class is initialized
// Functions: methods of a class
// Static variables: variables that can be accessed WITHOUT instantiating the class
// Public variables: variables that can be accessed ONLY WHEN the class is instantiated
// Private variables: can be accessed ONLY INSIDE a class
// "this" object: references the class
// Inheritance: use "extends" to get the attributes of a parent class for new class
// Super: for calling base class attributes

// B) CLASSES
// PARENT CLASS
class Shape {
    #privateVariable = 'This is the data of a private variable';
    publicVariable = 'This is the data of a public variable';
    static staticVariable = 'This is the data of a static variable';

    // Initialized
    width = 0; // Standard value
    height = 0; // Standard value

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return 0;
    }

    static staticMethode() {
        return 'This is the output of a static method call'
    }

    getPrivateData() {
        return this.#privateVariable;
    }
}

// CHILD CLASS
class Square extends Shape {
    getArea() {
        return this.height * this.width;
    }

    getParentClassArea() {
        return super.getArea()
    }
}

const squareMousepad = new Square(5, 4);
console.log('\nCLASSES');
console.log('Height and width of the mousepad: ' + squareMousepad.height + ' ' + squareMousepad.width);
console.log('Area of the mousepad: ' + squareMousepad.getArea());
console.log('Get private variable: ' + squareMousepad.getPrivateData());
console.log('Call a static variable: ' + Shape.staticVariable);
console.log('Call a static method: ' + Shape.staticMethode());

// C) THIS OBJECT
// "this" object refers to the parent object of a function where it has been executed
// The value of this is determined on how a function is called
// it retains the "this" object where it was created!
// this.console.log(setTimeout()); // OUTPUT: window object -> all functionalities of JS are coming from global window object
const userDetails = {
    name: 'My name',
    getName: function() {
        name = 'test name';
        return this.name; // DOES NOT REFER to 'test name', but to the PARENT OBJECT 'My name'
    }
};
console.log('This class function displays the name of the parent object using this: ' + userDetails.getName()); // OUTPUT: 'My name'

class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log('Person: ', this.name);
    }

    printNameArrowFunction() {
        const userDetails = {
            name: 'Test for checking this working of this keyword',
            printName: () => {
                console.log('Name: ' + this.name);
            }
        };

        userDetails.printName();
    }
}

const peter = new Person('Peter');
peter.printName(); // OUTPUT: User Details:  My Name
peter.printNameArrowFunction(); // OUTPUT WARNING: User Details:  My Name
// EXPLANATION: this.name references not the name (can be called with "name" alone), but the Person objet

// D) COMPLICATED OBJECTS
// This is how complicated objects can be constructed
const exampleObjectOne = {
    name: 'Firstname Lastname',
    address: {
        city: 'malolos',
        province: 'bulacan',
        country: 'PH'
    }
}
console.log(exampleObjectOne);

const exampleObjectTwo = {
    userDetails: {
        name: 'Firstname Lastname',
        address: {
            city: 'malolos',
            province: 'bulacan',
            country: 'PH'
        }
    }
}
console.log(exampleObjectTwo);

