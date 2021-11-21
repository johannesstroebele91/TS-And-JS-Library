// Reference: https://www.typescriptlang.org/docs/handbook/2/classes.html

// 1) BASICS
// 2) CONSTRUCTOR OVERLOAD
// 3) CLASS HERITAGE
// 4) SHORT DECLARATION OF PROPERTIES
// 5) Encapsulation
// 6) Polymorphism

// 1) BASICS
// Class Members can bei either class fields or methods
console.log("1) SIMPLE EXAMPLE");
class Spot {
  // 1) Fields
  // field declaration creates a public writeable property on a class
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
console.log(spot.x, spot.y);
console.log(`${spot.x}, ${spot.y}`);

// 2) CONSTRUCTOR OVERLOAD
console.log("2) COMPLEX EXAMPLE");
interface IBox {
  x: number;
  y: number;
  height: number;
  width: number;
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
    this.x = (obj && obj.x) || 0;
    this.y = (obj && obj.y) || 0;
    this.height = (obj && obj.height) || 0;
    this.width = (obj && obj.width) || 0;
  }
}

console.log(new Box(<IBox>{ height: 123, width: 123, x: 1, y: 2 }));
console.log(new Box({ height: 1, width: 3, x: 2, y: 3 }));

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

// 4) SHORT DECLARATION OF PROPERTIES
/// 1) short version with public keyword:
export class Ingredient {
  constructor(
    public name: string,
    public unit: string,
    public amount: number
  ) {}
}

/// 2) long version:
export class Ingredients {
  name: string;
  unit: string;
  amount: number;

  constructor(name: string, unit: string, amount: number) {
    this.name = name;
    this.unit = unit;
    this.amount = amount;
  }
}

/* 5) Encapsulation
- Is the **process of ensuring accurate protection** over certain data (properties) passed
- controlling **member property** (e.g. balance property) access in conjunction with ***getter* and *setter* methods** can be used to your advantage
    - **Public** – All the members of the class, its child classes, and the instance of the class can access.
    - **Protected** – All the members of the class and its child classes can access them. But the instance of the class can not access.
    - **Private** – Only the members of the class can access them
    - **Getters:** this is a special type of method who’s sole purpose is to give indirect *read* access to client code to a private or protected member that they are otherwise prohibited from
    - **Setters:** this is a special type of method who’s sole purpose is to give indirect write access to client code to a private or protected member that they are otherwise prohibited from */

/* Example:
 * private: savingsBalance and other functions
 * public: getter and setter */
export default class BankMember {
  private _savingsBalance: number;

  public get savingsBalance(): number {
    return this._savingsBalance;
  }

  constructor(savingsBalance: number) {
    this._savingsBalance = savingsBalance;
  }

  public deposit(amount: number): void {
    this._savingsBalance += amount;
  }

  public withdraw(amount: number): void {
    if (this.savingsBalance < amount) {
      console.log("Insufficient Funds");
      return;
    }

    this._savingsBalance -= amount;
  }
}

const chuck = new BankMember(3000);
console.log("\nDepositing Funds");
chuck.deposit(150);
console.log(`Chuck's Savings Balance: $${chuck.savingsBalance} \n`);

console.log("Malicious Account Fraud Happening here.... \n");
// chuck.savingsBalance = 0; // Encapsulation (private) enables that balance cannot be set directly here (compile error)

console.log("Withdrawing Funds");
chuck.withdraw(1650);
console.log(`Chuck's Savings Balance: $${chuck.savingsBalance} \n`);

/* 6) Polymorphism
- multiple classes inherit from a parent and override the same functionality, the result is polymorphism
- Each of those child classes now implements a property or method, but they each may have their own way of performing that implementation */

class CheckingAccount {
  open(initialAmount: number) {
    // code to open account and save in database
  }
}
class BusinessCheckingAccount extends CheckingAccount {
  open(initialAmount: number) {
    if (initialAmount < 1000) {
      throw new Error(
        "Business accounts must have an initial deposit of 1.000 Euros"
      );
    }
    super.open(initialAmount);
  }
}
class PersonalCheckingAccount extends CheckingAccount {
  open(initialAmount: number) {
    if (initialAmount <= 0) {
      throw new Error(
        "Personal accounts must have an initial deposit of more than zero Euros"
      );
    }
    super.open(initialAmount);
  }
}

const sandyBusiness = new BusinessCheckingAccount();
sandyBusiness.open(200); // throws an error
const sandyPersonal = new PersonalCheckingAccount();
sandyPersonal.open(200); // works fine
