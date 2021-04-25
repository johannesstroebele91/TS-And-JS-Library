// "this" object refers to the parent object of a function where it has been executed
// The value of this is determined on how a function is called
// it retains the "this" object where it was created!
// this.console.log(setTimeout()); // OUTPUT: window object -> all functionalities of JS are coming from global window object
const user = {
    id: 123,

    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};

console.log(user.becomeAdmin());