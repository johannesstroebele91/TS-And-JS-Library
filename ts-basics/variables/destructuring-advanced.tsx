// 1) Advanced Destructuring Example
// Destructuring can also help to make code easier to read
// e.g. `{ startOfDay, }: { startOfDay: boolean; }`

interface CustomItemHandler {
  renderItem: (disabled: boolean, startOfDay?: boolean) => any;
  transformInitialValues: (values: any[]) => any;
}

export const toMoment = (value: string) => (value ? value : null);

// 2) Good example
const dateSelectItem = ({
  startOfDay,
}: {
  startOfDay: boolean;
}): CustomItemHandler => ({
  renderItem: (props) => "<div startOfDay={startOfDay} {...props} />",
  transformInitialValues: (values) =>
    values && values.length > 0 ? toMoment(values[0]) : undefined,
});

const formField = dateSelectItem({ startOfDay: false });

// 3) Bad example
const dateSelectItemBadExample = (startOfDay: boolean): CustomItemHandler => ({
  renderItem: (props) => "<div startOfDay={startOfDay} {...props} />",
  transformInitialValues: (values) =>
    values && values.length > 0 ? toMoment(values[0]) : undefined,
});

const formFieldBadExample = dateSelectItemBadExample(false);

// 5) rename variables while destructuring with aliases
const personWitoutDestructuring = { id: 1, name: "John Doe" };
const { name: personDestructuredName } = personWitoutDestructuring;
console.log(personDestructuredName); // returns 'John Doe'

// 6) Object Destructuring With a Dynamic Key
const objectWithoutDestructuring = { hello: "Hello there", bye: "Good bye" };
const objectName = "bye";

const { [objectName]: objectNameProperty } = objectWithoutDestructuring;
console.log(objectNameProperty);
