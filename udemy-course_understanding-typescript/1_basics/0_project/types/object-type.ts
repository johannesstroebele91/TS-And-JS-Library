// Object Type
// TS does infers object types: e.g. person object
// But object types have instead of key-value pairs, key-type paris!!
// So each property or field, has a key e.g. name and a type e.g. string

// Excursus: can explicitly make it a object (not needed) by writing object as a type behind the name, e.g. const person: object {}
// but is not good practice, better either outsource the type or directly define it after the name
let someObject: { name: string; age: number };
const person: {
  name: string;
  age: number;
  hobbies: string[];
  wage: (number | string)[];
s  family: {
    sister: string;
    brother: string;
  };
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["soccer", "drawing"],
  wage: [53400, "senior"],
  role: [2, "manager"],
  family: {
    sister: "petra",
    brother: "max",
  },
};

console.log(person.name);
