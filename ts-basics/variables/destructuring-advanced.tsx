// 1) Advanced Destructuring Example
// Destructuring can also help to make code easier to read
// e.g. `{ startOfDay, }: { startOfDay: boolean; }`

interface CustomItemHandler {
  renderItem: (disabled, startOfDay?) => any;
  transformInitialValues: (values: any[]) => any;
}

export const toMoment = (value) => (value ? value : null);

// 2) Good example
const dateSelectItem = ({
  startOfDay,
}: {
  startOfDay: boolean;
}): CustomItemHandler => ({
  renderItem: (props) => <div startOfDay={startOfDay} {...props} />,
  transformInitialValues: (values) =>
    values && values.length > 0 ? toMoment(values[0]) : undefined,
});

const formField = dateSelectItem({ startOfDay: false });

// 3) Bad example
const dateSelectItemBadExample = (startOfDay): CustomItemHandler => ({
  renderItem: (props) => <div startOfDay={startOfDay} {...props} />,
  transformInitialValues: (values) =>
    values && values.length > 0 ? toMoment(values[0]) : undefined,
});

const formFieldBadExample = dateSelectItemBadExample(false);
