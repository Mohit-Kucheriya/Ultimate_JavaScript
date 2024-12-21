console.log(Math.sqrt(9)); // 3
console.log(9 ** (1 / 2)); // 3

console.log(8 ** (1 / 3)); //2

// Math.max - returns the largest of the given numbers and even do type coercion but not the parsing.
console.log(Math.max(1, 2, 23, 14, 55)); // 55
console.log(Math.max(1, 2, 23, 14, "101")); // 101
console.log(Math.max(1, 2, "23px", 14, 55)); // NaN

// Math.random - returns a random number between 0 and 1 but 1 is excluded.
console.log(Math.trunc(Math.random() * 6) + 1);

// Random numbers bewtween any two numbers
const randommInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

console.log(randommInt(1, 100));

/*

Explanation -

Math.floor(Math.random() * (max - min + 1) + min) -
1. Math.random() returns a random number between 0 and 1.

2. Math.floor() returns the largest integer that is less than or equal to a given number, 
effectively rounding down.

3. Math.random() * (max - min + 1) returns a random number between 0 and max - min and we add 1
to it, because we want the number to be between min and max.

4. Math.floor(Math.random() * (max - min + 1) + min) returns a random number between min and max.

*/

// Rounding Integers - Remove the decimal part
console.log(Math.trunc(1.5)); // 1
console.log(Math.round(1.5)); // 2

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// Rounding Decimals
// toFixed() - returns a string representing a number rounded to a specified number of decimal places.
console.log(+(1.2).toFixed(0)); // 1
console.log(+(1.2).toFixed(2)); // 1.20



