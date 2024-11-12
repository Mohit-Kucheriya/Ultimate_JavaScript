/*

1. Objects - Objects are collections of properties. Each property is a key-value pair. The key is always a string, but the value can be of any type.

2. Objects are created using curly braces {}. The curly braces can contain a comma-separated list of key-value pairs.

Syntax - let obj = {key1: value1, key2: value2};

3. Accessing an object property - obj.key;

4. To know the length of an object, we can use the length property.

Syntax - obj.length;

5. To access the last property in an object simply use the length property - substract 1 from the length.

Syntax - obj[obj.length - 1];

6. To add a property to an object, we can use obj[key] = value;

7. To remove a property from an object, we can use delete obj[key];

8. To iterate over the properties of an object, we can use a for...in loop.

Syntax - for (let key in obj) {
    console.log(key);

*/

const mohitArray = [
    "Mohit",
    "Kucheriya",
    2024 - 2001,
    ["Harry", "Ron", "Hermoine"],
];

// An object containing 4 properties i.e firstName, lastName, age and friends
const mohitObject = {
    firstName: "Mohit",
    lastName: "Kucheriya",
    age: 2024 - 2001,
    friends: ["Harry", "Ron", "Hermoine"],
};

console.log(mohitObject);
