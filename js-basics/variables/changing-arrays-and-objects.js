// A) ACCESS, ASSIGN, AND CHANGE NORMALLY
// B) WITH DESTRUCTURING

const userDetails = {
    name: 'Peter Purtan',
    address: {
        city: 'malolos',
        province: 'bulacan',
        country: 'PH'
    },
    runFunction: () => {},
    undef: undefined
}

// A) ACCESS, ASSIGN, AND CHANGE NORMALLY
console.log('\nWITHOUT DESTRUCTURING')
const fruits = ['Avocado', 'Banana', 'Apple'];

const nameWithoutDestruction = userDetails.name;
const addressWithoutDestruction = userDetails.address;
console.log('Name: ' + nameWithoutDestruction);
console.log('Address: ' + JSON.stringify(addressWithoutDestruction));

const fristFruit = fruits[0] || 'defaultFruit';
console.log('Frist fruit: ' + fristFruit);

// REST PARAMETER to change the name, assign default values
// creates a new array with all elements that pass the test implemented by the provided function
// Example: all fruits besides the first fruit (index = 0)
const otherFruits = fruits.filter((value, index) => index !== 0);
console.log('Other fruits: ' + otherFruits);

const newUserDetails = {...userDetails, phone: '0049123785273'};
console.log('NewUserDetails ' + JSON.stringify(newUserDetails));
console.log('phone ' + newUserDetails.phone);

// B) WITH DESTRUCTURING
// Expressions can make it possible to unpack values from arrays or properties from objects, into distinct variables
// Expressions are any valid unit of code that resolves to a value (let a;)
// E.g. a text snippet function f(){} can be an expression and a statement (let g = function f() {}; function f() {};)
console.log('\n\nWITH DESTRUCTURING')
const { name = 'Anh', address, phone: newPhone = '004837272817', ...otherDetails} = userDetails ;
const [firstFruitDestructed = 'defaultFruit', ...otherFruitsDestructed] = fruits;
console.log(name + ' ' + address.city + ' ' + address.country);
console.log(newPhone);
console.log(firstFruitDestructed + ',' + otherFruitsDestructed);
