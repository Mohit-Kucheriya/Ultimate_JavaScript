/*

Two ways to access the properties of an object

1. Dot notation - obj.property

2. Bracket notation - obj["property"]. In these we need to specify the property name in quotes i.e in string

The big difference between the two is that in bracket notation, we can put any expression we'd like. Whereas in dot notation, we can only access properties that are valid identifiers.

*/

const mohitObject = {
    firstName: "Mohit",
    lastName: "Kucheriya",
    age: 2024 - 2001,
    friends: ["Harry", "Ron", "Hermoine"],
};

console.log(mohitObject);

console.log(mohitObject.firstName);

console.log(mohitObject["lastName"]);

const nameKey = "Name";
console.log(mohitObject["first" + nameKey]);

// Activity
// const intrestedIn = prompt(
//     `What do you want to know about Mohit?. Choose between firstName, lastName, age, friends`
// );

// if (mohitObject[intrestedIn]) {
//     console.log(mohitObject[intrestedIn]);
// } else {
//     console.log(`Sorry, I don't know anything about ${intrestedIn}`);
// }


// To add a new property to an object
mohitObject.location = "India";
mohitObject["hobbies"] = ["Coding", "Gym", "Travelling"];

console.log(mohitObject);

// Challenge
console.log(`${mohitObject.firstName}'s favourite character in the movie is ${mohitObject.friends[2]} `);
