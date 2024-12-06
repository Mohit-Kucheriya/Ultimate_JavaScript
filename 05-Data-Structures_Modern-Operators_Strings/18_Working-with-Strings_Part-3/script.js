/*

1. split() - Splits the string into multiple parts based on the specified separator, and 
returns an array of the parts.

2. join() - Joins the array elements into a single string, using the specified separator.

*/

const str = "a+very+long+string";
console.log(str.split("+")); // ["a", "very", "long", "string"]

const [firstName, lastName] = "Mohit Kucheriya".split(" ");
console.log(firstName, lastName);

const newNameJoin = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newNameJoin); // Mr. Mohit KUCHERIYA

const capitalizeName = function (name) {
    const names = name.split(" ");
    console.log(names);

    const newNameCapitalized = [];

    for (const n of names) {
        // newNameCapitalized.push(n[0].toUpperCase() + n.slice(1))
        newNameCapitalized.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(newNameCapitalized.join(" "));
};
capitalizeName("harry potter and the philosopher's stone");
