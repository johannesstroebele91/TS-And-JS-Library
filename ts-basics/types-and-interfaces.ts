// Type aliases and interfaces are very similar,
// and in many cases you can choose between them freely
// HOWEVER: a type cannot be changed after declaration,
// but an interface CAN

// 1) TYPES
// Creating a name for any type
console.log('Types');
type Point = {
    x: number;
    y: number;
};

// Exactly the same as the earlier example
function printCoordWithTypes(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

console.log(printCoordWithTypes({ x: 100, y: 100 }));

/* Type alias can name a union type
*  allows having alternative types for a given variable
*  if container is not of type HTMLElement, TypeScript will check again if the value is equal to the type after the pipe (|) symbol
*  and so forth because you can have multiple types */
type ID = number | string;
let userIdPeter: ID = '12312';
let userIdSarah: ID = 342;

// 2) INTERFACES
// interface declaration is another way to name an object type
console.log('Interfaces');
interface PointInterface {
    x: number;
    y: number;
}

function printCoordWithInterface(pt: PointInterface) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

console.log(printCoordWithInterface({ x: 100, y: 100 }));
