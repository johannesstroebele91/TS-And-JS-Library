// Type aliases and interfaces are very similar,
// and in many cases you can choose between them freely
// HOWEVER: a type cannot be changed after declaration,
// but an interface CAN

// Tip: the file extension "type.d.ts" make types globally available

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

/* 2) UNION TYPE:
* Type alias can name a union type
* allows having alternative types for a given variable
* if container is not of type HTMLElement, TypeScript will check again if the value is equal to the type after the pipe (|) symbol
* and so forth because you can have multiple types */
let course: string | number = "React – the complete guide";

type identification = number | string;
let userIdPeter: identification = '12312';
let userIdSarah: identification = 342;


// 3) INTERFACES
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

// Intersection types enables to extend types
interface ITodo {
    _id: string,
    name: string,
    description: string,
    status: boolean,
    createdAt?: string,
    updatedAt?: string
}

type Props = ITodo & {
    updateTodo: (todo: ITodo) => void
    deleteTodo: (_id: string) => void
}

interface ToDoProps {
    todo: ITodo
}