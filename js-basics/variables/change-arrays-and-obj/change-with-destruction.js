/* Array Destructuring
 * Object destructuring 
 * Further example */

// Destructuring
// Destructuring allows to easily access
// the values of arrays or objects
// and assign them to variables.


// Easily extract array elements or object properties 
// AND store them in variables

// Data
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
  
// 1) Array Destructuring
// Order defines which property gets assigned
console.log("1) Array Destructuring")
const numbers = [1,2,3];
const [a, b] = numbers;
console.log(a) // Hello
console.log(b) // Max
console.log(numbers);

// Leaving out a number
const names = ["Max","Peter","Sarah"];
[name1, , name3] = names;
console.log(name1);
console.log(name3);

// 2) Object destructuring
// Name of the property defines which property gets assigned
console.log("\n2) Object destructuring")
const user = {
    id: 42,
    name: 'Max',
    is_verified: true
};
const {id, is_verified} = user;
console.log(id);
console.log(is_verified);

// 3) Further example
console.log('\n3) Further example')
const { name = 'Anh', address, phone: newPhone = '004837272817', ...otherDetails} = userDetails ;
const [firstFruitDestructed = 'defaultFruit', ...otherFruitsDestructed] = fruits;
console.log(name + ' ' + address.city + ' ' + address.country);
console.log(newPhone);
console.log(firstFruitDestructed + ',' + otherFruitsDestructed);
