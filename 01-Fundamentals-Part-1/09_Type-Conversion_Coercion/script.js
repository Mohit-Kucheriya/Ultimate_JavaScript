/*

Type Conversion and Coercion -

1. Type conversion is the process of converting one data type to another manually or explicitly. 

2. Coercion is the process of automatically converting one data type to another. 

*/

// Type conversion
const inputYear = "2020"; // String
// Here inputYear is a string, So by '+' operator it will concatenate and 18 will be converted to string automatically.
console.log(inputYear + 18); // 202018 as string

// To convert string into number we use Number() function.
console.log(Number(inputYear) + 18); // 2038 as number

// What if we try to covert string into number and it is not a number?
console.log(Number("Mohit")); // NaN
console.log(typeof Number("Mohit")); // number

console.log(typeof NaN); // number

console.log(String(23)) // 23 as string

// Coercion
console.log("I'm " + 23 + " year old!"); // I'm 23 year old!, As 23 is a number, it will be converted to string automatically.

console.log("23" - "10" - 3); // 10, here JS will convert string "23" to number and then perform the operation.

let n = "10" + 1 // 101 as string 
n = n - 1 // "101" - 1, JS will convert string to number 
console.log(n); // 100

console.log(("2" + 2) - (1 + "10")); // Here first () will be solved and then - will be solved.
console.log("2" + 2 - 1 + "10");
