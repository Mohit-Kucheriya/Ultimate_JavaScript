/*
Different ways of creating and filling arrays

1. new Array + fill() method

2. Array.from - 
It takes two arguments, the first is the object i.e. the length of the array and the second is a 
mapping function.

NOTE - The mapping function is called for each element in the array and returns the value to 
be used in the new array.

*/

// Different ways of creating arrays
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

const arr2 = new Array(10, 20, 30, 40, 50);
console.log(arr2);

const arr3 = new Array(7);
console.log(arr3);
/*

When we create an array like this, it creates an array with the length of the number we pass in.
Whenever we only pass in one argument, it creates an array with that length and fills it with empty.

NOTE - We can only use the fill() method on this empty array

*/

const arr4 = new Array(7);
arr4.fill(10);
console.log(arr4);

/*

Beside to filling an array we can also specify where we want it to start to fill and the end.
NOTE - Its mutates the original array.

*/

const arr5 = new Array(5);
arr5.fill(2, 1, 4);
console.log(arr5);

const arr6 = Array.from({ length: 5 }, () => 2)
console.log(arr6);

const arr7 = Array.from({ length: 7 }, (_, i) => i + 1)
console.log(arr7);

// Assignment 
const diceRoll = Array.from({ length: 100 }, () => Math.floor(Math.random() * 6) + 1)
console.log(diceRoll);

/*

NOTE - Things like Strings, Maps, Sets are iterables in JavaScript. And they can be converted into 
real arrays using Array.from()

NOTE - Remember when we use querySelectorAll() it gives us a NodeList which looks like an array but 
is not an array.

*/




