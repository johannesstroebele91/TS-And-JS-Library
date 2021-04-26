// Inheritance
// another class that inherits all properties and methods from another class
// use "extends" to get the attributes of a parent class for new class

// PARENT CLASS
class Animal {

    // Declaration (Initialization)
    // 1) Public variable
    // weight; does not need to be declared in js!
    width = 0; // Without standard value
    height = 0; // With standard value
    // 2) Privat variable
    #color = 'black';
    // 3) Static variable
    static raceName = 'Animals'; // Static var (with standard value)

    constructor(weight, height, width) {
        weight = this.weight;
        height = this.height
        width = this.width
    }

    getPublicDimensions() {
        return this.weight*this.height;
    }
    // 
    getPrivateColor() {
        return this.#color;
    }
}

class Cat extends Animal {
    #canSeeInTheDark = true;

    constructor(){
        // Super 
        // executes the parent constructor
        // only needed, if you are extending a class && implement a constructor (constructor implementation is optional)
        super();
    }
    getCanSeeInTheDark() {
        return this.#canSeeInTheDark;
    }
}
const Leo = new Cat(24.5, 0.7,0.3);
console.log("* Parent class");
console.log('* Access static var "name of race" = ' + Animal.raceName);
console.log('* Access public dimensions of the animal: ' + Leo.getPublicDimensions())
Leo.width=0.4; // Update public width
console.log('* Change public width of the animal: ' + Leo.width);
// Leo.color = 'grey'; // does not change anything, because color is private
console.log('* Access private color: ' + Leo.getPrivateColor());

console.log("\rChild class");
console.log('* Access private ability "can see in the dark" = ' + Leo.getCanSeeInTheDark());
