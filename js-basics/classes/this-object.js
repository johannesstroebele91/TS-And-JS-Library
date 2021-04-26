// "this" object: references the class
// "it refers to the parent object of a function where it has been executed
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