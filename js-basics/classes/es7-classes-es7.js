// ES6 class syntax (normal)
class AnimalES6 {
    constructor() {
        this.width=1.6;
    }
    getWidth() {
        return this.width;
    }
}
class DogES6 extends AnimalES6 {
    constructor() {
        super();
        this.behaviour = 'friendly';
    }
    getBehaviour() {
        return this.behaviour;
    }
}
console.log("ES6 classes");
const bella = new DogES6();
console.log(bella.width);
console.log(bella.behaviour);

// ES7 class syntax (new)
class AnimalES7 {
    width = 0.9;
    height; // TODO fix later

    getWidth = () => {
        console.log(this.width);
    }
}

class DogES7 extends AnimalES7 {
    behaviour = 'hostile'; 
    getBehaviour = () => {
        return behaviour;
    }
}

console.log("ES7 classes");
const charlie = new DogES7(2.4, 3.1);
console.log(charlie.width);
console.log(charlie.height); // TODO fix later
console.log(charlie.behaviour);