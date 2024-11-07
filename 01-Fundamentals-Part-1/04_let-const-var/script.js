/*

There are 3 ways to declare a variable in JS
1. let - ES6, can be reassigned or mutated. It is block scope
2. const - ES6, can't be reassigned or mutated in future or at any point of time, once the value is assigned.
3. var - ES5 - can be reassigned or mutated. It is function scope.

*/

let age = 23;
age = 24;

const birthYear = 1990;
birthYear = 2000; // This will throw an error i.e Assignment to constant variable

// const myCurrentSalary; This is not a valid declaration, i.e.a initial value is required.

// var is old way of declaring a variable. 

lastName = "Kucheriya";
console.log(lastName); // This is will actually print the value of the variable lastName, beacuse it will ot create the vairable in the current scope, instead JS will create a property in the global object.