// Reference: https://www.typescriptlang.org/docs/handbook/2/classes.html

// 1) BASICS
// 2) CONSTRUCTOR OVERLOAD
// 3) CLASS HERITAGE

// 1) BASICS
// Class Members can bei either class fields or methods
console.log('1) SIMPLE EXAMPLE');
class Spot {

    // // 1) Fields
    // // field declaration creates a public writeable property on a class
    x: number;
    y: number = 0; // Initialize values
    // z; specification is not necessary (any is default)
    readonly w: number; // readonly prevents assignments to the field outside of the constructor

    // Constructor
    // You can add parameters with type annotations,
    // default values, and overloads
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    errorReadonly() {
        // this.w = 5; // OUTPUT: error because of readonly
    }
}

const spot = new Spot();
spot.x = 0;
spot.y = 0;
// pt.w = 5; // OUTPUT: error because of readonly
console.log(spot.x, spot.y)
console.log(`${spot.x}, ${spot.y}`);


// 2) CONSTRUCTOR OVERLOAD
console.log('2) COMPLEX EXAMPLE');
interface IBox {
    x : number;
    y : number;
    height : number;
    width : number;
}

class Box {
    public x: number;
    public y: number;
    public height: number;
    public width: number;

    // CONSTRUCTOR OVERLOAD
    constructor();
    constructor(obj: IBox);
    constructor(obj?: any) {
        this.x = obj && obj.x || 0
        this.y = obj && obj.y || 0
        this.height = obj && obj.height || 0
        this.width = obj && obj.width || 0;
    }
}

console.log(new Box(<IBox>{height: 123, width:123, x:1,y:2}));
console.log(new Box({height: 1, width: 3, x:2,y:3}));

// 3) CLASS HERITAGE
// JavaScript can inherit from base classes
// Classes may "extend" from a base class
class Animal {
    move() {
        console.log("Moving along!");
    }
}

class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
