const ruchitaObj = {
    firstName: "Ruchita",
    year: 2000,

    calcage: function () {
        const age = 2024 - this.year;
        console.log(this); // 'this' points to the object on which the method is called i.e. ruchitaObj
        console.log(age);

        const printHelloWithAge = function () {
            console.log(this); // As this is a simple regular function, the 'this' keyword inside the function will point to the global object (window) and in strict mode it will be undefined.

            return `Hello ${this.firstName}. You are ${age} years old.`;
        };
        printHelloWithAge(); // Simple regular function call
    },
};

ruchitaObj.calcage();


// Using regular function, inside the regular function 
const potterObj = {
    firstName: "Harry",
    year: 2000,

    calcage: function () {
        const age = 2024 - this.year;
        console.log(this); // 'this' points to the object on which the method is called i.e. potterObj
        console.log(age);

        const self = this; // 'self' still in the calcAge(), so 'this' is the harryObj

        const printHelloWithAge = function () {
            console.log(self);

            return `Hello ${self.firstName}. You are ${age} years old.`;
        };
        console.log(printHelloWithAge()); // Simple regular function call
    },
};

potterObj.calcage();

// arrow function inside the regular function

const hermoineObj = {
    firstName: "Hermoine",
    year: 2000,

    calcage: function () {
        const age = 2024 - this.year;
        console.log(this); // 'this' points to the object on which the method is called i.e. hermoineObj
        console.log(age);

        const printHelloWithAge = () => {
            console.log(this); // arrow function inherits the 'this' keyword from the parent scope

            return `Hello ${self.firstName}. You are ${age} years old.`;
        };
        console.log(printHelloWithAge()); // Simple regular function call
    },
};

hermoineObj.calcage();

// arguments keyword 

const argRegularFunc = function (a, b) {
    console.log(arguments);
    return a + b;
}
argRegularFunc(10, 20, 30, 40, 50);

const argArrowFunc = (a, b) => {
    console.log(arguments); // ReferenceError: arguments is not defined
    return a + b;
}
argArrowFunc(1, 2) 
