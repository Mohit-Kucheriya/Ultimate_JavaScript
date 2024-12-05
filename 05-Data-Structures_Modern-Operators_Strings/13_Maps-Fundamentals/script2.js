/*

Using objects and arrays as keys in a map

Key Concepts -
Map Keys -

In a Map, keys can be any type: primitives (e.g., numbers, strings) or objects (e.g., arrays).
For objects or arrays, JavaScript uses reference equality to check if two keys are the same.
Reference Equality:

When you use [1, 2] as a key in restaurant.set([1, 2], "Test"), it creates a new array in memory.
When you call restaurant.get([1, 2]), you’re passing a different array object 
(even though its contents look the same).

1. Setting the Key -
restaurant.set([1, 2], "Test");

 - [1, 2] creates a new array in memory (e.g., at memory location A).

 - The Map stores this array (reference A) as the key.

2. Getting the Value -
restaurant.get([1, 2]);

 - Here, another [1, 2] is created (a new array at a different memory location, say B).

 -The Map tries to find a key with the reference B but doesn’t find it because B !== A.

Simple Explanation - 
 - Even though the contents of [1, 2] look the same, the two arrays are different objects in memory.

 - Map doesn’t compare the contents of objects; it compares their references 
 (like their "addresses" in memory). 

 Solution -
If you want to use the same key and retrieve its value, you need to keep a reference to the exact array object

const key = [1, 2]; // Store the reference
restaurant.set(key, "Test");
console.log(restaurant.get(key)); // Now it works!

*/

const restaurant = new Map();
restaurant.set([1, 2], "Test");
console.log(restaurant);

console.log(restaurant.get([1, 2]));

