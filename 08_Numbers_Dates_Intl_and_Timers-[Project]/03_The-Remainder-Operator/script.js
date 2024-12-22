/*

 The Remainder Operator - %

 The remainder operator (%) returns the remainder of the division of one number by another.
 NOTE - Whenever we need to do something Nth time, we can use the remainder operator.

*/

console.log(5 % 2); //1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 3 * 2 + 2

const isEven = n => n % 2 === 0
console.log(isEven(8)); // true
console.log(isEven(23)); // false
