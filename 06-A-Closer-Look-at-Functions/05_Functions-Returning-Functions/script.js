/*

Functions can return other functions.

Example -

function createFunction(name) {
    return function () {
        console.log(`Hello ${name}`);
    };
}

*/

const greet = function (greetingMessage) {
    return function (name) {
        console.log(`${greetingMessage} ${name}`);
    };
};

// Calling the function
const greetMohit = greet("Hey Good Morning");
greetMohit("Mohit");

const greetArrow = (greetMessage) => (name) =>
    console.log(`${greetMessage} ${name}`);

const greetArrowHermoine = greetArrow("I love");
greetArrowHermoine("Hermoine");
