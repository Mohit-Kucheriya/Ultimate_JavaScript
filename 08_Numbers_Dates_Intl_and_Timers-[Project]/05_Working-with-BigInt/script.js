/*

BigInt - A special type of number that can be arbitrarily large.

As we know, numbers are represented internally in a 64 bit. So there are only 64 ones and zeroes to
represent any number.

Only 53 bits are used to represent the actual number, the rest is used to store the sign of the number.

*/

console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(12336547996320042179224861452156n); // n to represent a big number

// Operations
console.log(1000n + 100000n + 100000000n); // 100101000n

// let huge = 12351676439842186347612n;
// let num = 23;
// console.log(huge * num); // Cannot mix BigInt and other types, use explicit conversions

let huge2 = 12351676439842186347612n;
let num2 = 23;
console.log(huge2 * BigInt(num2)); // Explicit conversion - 284088558116370285995076n

// Comparisons
console.log(20n > 15); // true
console.log(20n == "20"); // true

let a1 = 20n;
console.log(`typeof a1 =`, typeof a1);

let a2 = 20;
console.log(`typeof a2 =`, typeof a2);

console.log(a1 === a2); // false



