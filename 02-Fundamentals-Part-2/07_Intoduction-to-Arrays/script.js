/*

1. Array - An array is a data structure that stores multiple values in a single variable. It is a collection of values that are ordered and indexed. Arrays are zero-indexed, which means that the first element in the array has an index of 0, the second element has an index of 1, and so on.

a. Arrays are used to store a collection of values, such as a list of names, a list of numbers, or a list of objects. Instead of using a single variable to store all the values, an array allows you to store multiple values in a single variable.

b. Syntax - let arr = [];

2. Another way to create an array is by using the Array() constructor function.

a. Syntax - let arr = new Array();

3. Accessing an element in an array - arr[index];

4. To know the length of an array, we can use the length property.

a. Syntax - arr.length;

5. To access the last element in an array simply use the length property - substract 1 from the length.

a. Syntax - arr[arr.length - 1];

6. To add an element to an array, we can use arr[index] = value;

*/

const friend1 = "Harry";
const friend2 = "Ron";
const friend3 = "Hermoine"

const friendsArray = ["Harry", "Ron", "Hermoine"];
console.log(friendsArray); // ["Harry", "Ron", "Hermoine"]

console.log(friendsArray[0]); // Harry

console.log(friendsArray[friendsArray.length - 1]);

friendsArray[0] = "Harry Potter";
console.log(friendsArray); // ["Harry Potter", "Ron", "Hermoine"]


// Using the Array() constructor function
const yearsArray = new Array(2020, 2022, 2024);
console.log(yearsArray); // [2020, 2022, 2024]

// Storing different types of values in an array
const firstName = "Mohit";
const personDetails = [firstName, "Kucheriya", 2024 - 2001, friendsArray]
console.log(personDetails); // ["Mohit", "Kucheriya", 22, Array(3)]

// Exercise

const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const year = [1990, 1995, 2001, 2006, 2011]

const age1 = calcAge(year[0]); // calcAge(year[0]) i.e year[0] = 1990. So calcAge(1990)
console.log(age1);

const age2 = calcAge(year[year.length - 1]);
console.log(age2);

// We can also place the function call inside the array, because they will produce a value.
const age3 = [calcAge(year[0]), calcAge(year[year.length - 1])];
console.log(age3);
