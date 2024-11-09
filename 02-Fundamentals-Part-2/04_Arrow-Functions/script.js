/*

Arrow Functions - New way of writing functions in JavaScript. Introduced in ES6. It is a shorter way of writing functions.

Syntax:

const double = n => n * 2;

*/

// with single parameter and single line of code.
const calculateAge3 = (birthYear) => 2024 - birthYear;
const age3 = calculateAge3(2001);

console.log(`Using arrow function, your current age is ${age3}`);

// with single parameters and multiple lines of code, we have to explicitly return the value.
const yearsUntilRetirement = (birthYear) => {
    const currentAge = 2024 - birthYear;
    const retirementAge = 65 - currentAge;
    return retirementAge;
};

const age4 = yearsUntilRetirement(2010);
console.log(`Using arrow function, your retirement age is ${age4}`);

// with multiple parameters and multiple lines of code, we have to explicitly return the value.
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const currentAge = 2024 - birthYear;
    const retirementAge = 65 - currentAge;
    return `${firstName} will retire in ${retirementAge} years`
}

console.log(yearsUntilRetirement2(2010, "Harry"));
console.log(yearsUntilRetirement2(1990, "Dumbledore"));

