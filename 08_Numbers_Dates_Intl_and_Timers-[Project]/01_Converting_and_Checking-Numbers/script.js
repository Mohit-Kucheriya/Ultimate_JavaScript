/*

1. All Numbers in JavaScript are internally treated as floating point numbers. That's why when you do 
23 === 23.0, it returns true.

2. In JS we have only one type of number, the number.

3. Numbers are represented internally in a 64 base 2 format. This means numbers are always stored
in binary format. So basically, they are only composed of 0 and 1.

4. The unary + operator will convert the operand to a number if it's not already a number.

5. parseInt() is a method that converts a string to an integer, and if the string contains non-numeric characters, it returns NaN. Takes two arguments, the first is the string to be parsed, the second is the radix (optional) i.e base 10 or base 16.

6. isNaN() is a method that checks if a value is NaN (Not a Number). It returns a boolean.

*/

console.log(23 === 23.0);

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(Number.parseInt("30px", 10)); // 30
console.log(Number.parseInt("2.5rem")); // 2
console.log(Number.parseFloat("2.5rem")); // 2.5

// Check if value is Not a Number(NaN)
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN(+"23")); // false
console.log(Number.isNaN(+"23X")); // true

// Checking if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite(+"23")); // true
console.log(Number.isFinite(23 / 0));

// Checking if value is integer
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(+"23")); // true
console.log(Number.isInteger(23 / 0)); // false
