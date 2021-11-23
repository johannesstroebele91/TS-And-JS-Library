// “When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.”
// When two classes have the same properties
// then TS does not care if the name of the class is different

// IMPORTANT: each class does not

class Cat {
  constructor(public name: string, public nightvision: boolean) {}
}
class Duck {
  constructor(public name: string, public sound: string) {}
}

class Pelican {
  constructor(public name: string) {}
}
// Example for running fine
// Works fine because both Duck and Pelican class have a name
// IMPORTANT: additional properties like for Duck class ARE ok!
const mira: Pelican = new Duck("Pepe", "quack");

// Example for compile error
// because cat and duck do not have the same types
// const pepe: Cat = new Duck("Pepe", "quack"); // OUTPUT: Type 'Parrot' is not assignable to type 'Duck'. // Types of property 'sound' are incompatible.
