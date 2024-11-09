/*

 Declarations vs Expressions - 

 Declartaions - Simply the generic way, how we declare a variable or a function.

 Expressions - Functions without name, which are called anonymous functions and we can store them in a variable. As they are expressions, they produce a value.

*/

// Function Declaration
function calculateAge(birthYear) {
    return 2024 - birthYear;
}

const age1 = calculateAge(2001);
console.log(`Using function declaration, your current age is ${age1}`);

// Function Expression
const calculateAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calculateAge2(2008)
console.log(`Using function expression, your current age is ${age2}`);

