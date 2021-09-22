// Type aliases and interfaces are very similar,
// and in many cases you can choose between them freely
// HOWEVER: a type cannot be changed after declaration,
// but an interface CAN

// Tip: the file extension "type.d.ts" make types globally available

// 1) TYPES
// Creating a name for any type
console.log("Types");

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
let userIdPeter: identification = "12312";
let userIdSarah: identification = 342;

// 3) INTERFACES
// interface declaration is another way to name an object type
console.log("Interfaces");
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
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

type Props = ITodo & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

interface ToDoProps {
  todo: ITodo;
}

// 3) Intersection Types
// Ref: https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
type A = { a: string };
type B = { b: number };
type aAndB = { a: string; b: number };
type aAndB2 = A & B;

// aAndB === aAndB2

// const a1: aAndB2 = { a: "hi" }; // => type error, b is missing

type aOrB = A | B;
const a2: aOrB = { a: "hi" }; // works

// Type unions are a way of declaring that an object
// could be more than one type.

type StringOrNumber = string | number;
type ProcessStates = "open" | "closed";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
type AMessyUnion = "hello" | 156 | { error: true };

// If the use of "open" and "closed" vs string is
// new to you, check out: example:literals

// We can mix different types into a union, and
// what we're saying is that the value is one of those types.

// TypeScript will then leave you to figure out how to
// determine which value it could be at runtime.

// Unions can sometimes be undermined by type widening,
// for example:

type WindowStates = "open" | "closed" | "minimized" | string;

// If you hover above, you can see that WindowStates
// becomes a string - not the union. This is covered in
// example:type-widening-and-narrowing

// If a union is an OR, then an intersection is an AND.
// Intersection types are when two types intersect to create
// a new type. This allows for type composition.

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

// These interfaces can be composed in responses which have
// both consistent error handling, and their own data.

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

// For example:

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.artists);
};

// A mix of Intersection and Union types becomes really
// useful when you have cases where an object has to
// include one of two values:

interface CreateArtistBioBase {
  artistID: string;
  thirdParty?: boolean;
}

type CreateArtistBioRequest = CreateArtistBioBase &
  ({ html: string } | { markdown: string });

// Now you can only create a request when you include
// artistID and either html or markdown

const workingRequest: CreateArtistBioRequest = {
  artistID: "banksy",
  markdown: "Banksy is an anonymous England-based graffiti artist...",
};

const badRequest: CreateArtistBioRequest = {
  artistID: "banksy",
  markdown: "",
};

// enums
// an enums can be created as follows
export enum DfVehicleDisplaySettingEntry {
  DERIVATIVE = "DERIVATIVE",
  VIN = "VIN",
  V_NR = "V_NR",
  Y_NR = "Y_NR",
  LICENCE_NR = "LICENCE_NR",
}

// A object can be created based on a enum as follows
const vehicleExample: any = {
  [DfVehicleDisplaySettingEntry.DERIVATIVE]: "I20",
  [DfVehicleDisplaySettingEntry.VIN]: "H019177",
  [DfVehicleDisplaySettingEntry.Y_NR]: "Y20310",
  [DfVehicleDisplaySettingEntry.V_NR]: "541603",
  [DfVehicleDisplaySettingEntry.LICENCE_NR]: "M-DI 154E",
};
