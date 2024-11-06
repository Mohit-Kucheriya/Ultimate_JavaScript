/*

There are 7 primitive data types
1. Number - Floating point number. Used for decimal and integer numbers. 
2. String - Sequence of characters. Used for storing text.
3. Boolean - Logical type that can be either true or false. Used for decision making.
4. Undefined - Value taken by a variable that has not been assigned a value (empty value).
5. Null - Empty value.
6. Symbol - Value that is unique and cannot be changed.
7. Big Int - Larger integers than the Number type can hold

*/

// typeOf() - Returns the type of a value.

let jsIsAwesome = true;
console.log(typeof jsIsAwesome); // boolean

let firstName = "Mohit";
console.log(typeof firstName); // string

let age = 23;
console.log(typeof age); // number

// Dynamic typing
jsIsAwesome = "YES!";
console.log(typeof jsIsAwesome); // string

let year;
console.log(year); // undefined
console.log(typeof year); // undefined

console.log(typeof null); // object

// Assignment
/*
Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

Log the types of isIsland, population, country and language to the console.
*/
let isIsland = true;
let language;

console.log(typeof isIsland); // boolean
console.log(typeof language); // undefined
