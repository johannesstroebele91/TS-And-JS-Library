// This is how complicated objects can be constructed
const exampleObjectOne = {
  name: "Firstname Lastname",
  address: {
    city: "malolos",
    province: "bulacan",
    country: "PH",
  },
};
console.log(exampleObjectOne);

const exampleObjectTwo = {
  userDetails: {
    name: "Firstname Lastname",
    address: {
      city: "malolos",
      province: "bulacan",
      country: "PH",
    },
  },
};
console.log(exampleObjectTwo);

// Remember that there are three ways of specifying a key when you set a property
// Ref: https://exploringjs.com/es6/ch_oop-besides-classes.html#_computed-property-keys-1
// This is very useful for dynamically specifying the name of an element/property!!! (@DANIEL ROSE)
// Via a fixed name
obj.foo = true;
//  Via an expression
obj["b" + "ar"] = 123;
// Or by declaring it at the start
const obj = {
  [propKey]: true,
  ["b" + "ar"]: 123,
};
