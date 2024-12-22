/*

Numeric Separators -
Used to separate the digits of a number i.e. thousands, millions, billions, etc.

The underscore (_) is the numeric separator.

*/

const diameter = 287_460_000_000_000;
console.log(diameter);

const price = 100_000_000;
console.log(price);

const stringToNumber = Number("230000")
console.log(stringToNumber);

/*

When JavaScript's Number() function encounters a string that cannot be parsed into a valid number, 
it returns NaN (Not-a-Number).

*/

const stringToNumber2 = Number("230_000");
console.log(stringToNumber2); // NaN

