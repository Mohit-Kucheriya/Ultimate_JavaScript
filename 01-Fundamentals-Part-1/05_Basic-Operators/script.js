/*

Operators basically allows us to transform values or combine multiple values into a single value.
Types of operators
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators

*/

// 1. Assignment Operators
let ageMohit = 2024 - 2001;
let ageHarry = ageMohit + 5;
console.log(ageMohit);

const firstName = "Harry";
const lastName = "Potter";
console.log(firstName + " " + lastName);

/*
JavaScript uses type coercion and, when one operand is a string in an addition operation, it converts the other operand to a string as well.
*/
let number1 = 10;
let number2 = "20";
console.log(number1 + number2);

// 2. Assignment Operators
let x = 10 + 5; // 15 is assigned to x
x += 10; // x = x + 10 = 25
x++; // x = x + 1 = 26
console.log(x);

// 3. Comparison Operators - Used to produce a Boolean value
const getResult = ageMohit > ageHarry;
console.log(getResult);

const isAdult = ageMohit >= 18;
console.log(isAdult);


