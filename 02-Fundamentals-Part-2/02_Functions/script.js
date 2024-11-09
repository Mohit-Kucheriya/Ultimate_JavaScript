/*

Functions - A function is a block of code that can be reused. It can be called multiple times. It can hold one or multiple lines of code.

Parameters - A parameter is a variable that is specific to a function and it will get defined once we call the function.

Return  - Using 'return' keyword, we get the data back from the function and we can use it later or stored in a variable.

Arguments - Arguments are the data that we pass into the function when we call it.

Syntax:

function functionName() {
    // Code goes here whatever written inside this function body will be executed when the function is called.
}

// Calling the function or invoking the function
functionName();

*/

function logger() {
    console.log(`Hello I'm a function`); // Only prints the message to the developer console.
}

logger(); // It doesn't produce any result, while technically it does produce undefined if we doesnt return anything.
logger();

function fruitProcessor(apple, orange) {
    const juice = `Here is the juice of ${apple} apples and ${orange} oranges`;
    return juice;
}

const appleOrangeJuice = fruitProcessor(3, 2) // Once the function has been executed, this code here is replaced by the result of function i.e. whatever is returned by the function, basically juice will be "Here is the juice of 3 apple and 2 orange"

console.log(appleOrangeJuice);

const fruitJucie = fruitProcessor(7, 5)
console.log(fruitJucie);

