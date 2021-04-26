// Inheritance: use "extends" to get the attributes of a parent class for new class


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

