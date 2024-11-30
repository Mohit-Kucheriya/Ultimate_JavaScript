/*

The Spread Operator -

1. Expand an array into all its elements.

2. So basically, unpacking all the array elements at one.

3. We use '...' to expand an array.

Syntax -

[...array]

4. Useful in two cases -
a. When we want to expand an array into all its elements i.e. array literal.

b. When we pass arguments into functions.

5. NOTE -
Multiple values separated by a comma are usually expected when we pass arguments into functions.
OR 
When we build a new array i.e. array literal.

*/

// Before Spread Operator
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr); // [1, 2, 7, 8, 9]

// After Spread Operator
const goodArr = [1, 2, ...arr];
console.log(goodArr); // [1, 2, 7, 8, 9]

console.log(...goodArr); // 1 2 7 8 9

const generalStore = {
    name: "General Store",
    location: "Via del Corso, 1",
    item: ["Soaps", "Shampoos", "Body Lotions", "Deodorants"],
    snacks: ["Chips", "Potato Chips", "Hot Dogs", "Fries"],
};

const newSnacks = [...generalStore.snacks, "Candy Bar", "Cold Drink"];
console.log(newSnacks);

/*

Explanation -

1. The newSnacks will create a new array with the elements from the generalStore.snacks array and the new elements.

2. The spread operator is used to expand the array into all its elements.

NOTE - 
1. The spread opaerator, takes all the elements from the array.

2. Doesn't create new variables

*/

/*

Two important use cases of the spread operator -

1. To create a shallow copy of arrays.

2. To merge two or more arrays together.

*/

// Copying an array
const snacksCopy = [...generalStore.snacks]
console.log("Copy of snacks", snacksCopy);

// Merging two arrays
const marvelHeroes = ["Spider-Man", "Thor", "Hulk"];
const dcHeroes = ["Batman", "Superman", "Flash"];

const heroes = [...marvelHeroes, ...dcHeroes];
console.log("Heroes", heroes);

/*

NOTE -
1. The spread operator works, on all so called iterables.

2. Iterables, like arrays, strings, maps, sets. NOT objects.

*/

const str = "Mohit";
const letter = [...str, "!"]
console.log(letter);

// Real world example
function orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta which includes the following ingredients ${ing1}, ${ing2}, ${ing3}`);
}

let ingredients = [prompt("Ingredient 1 :"), prompt("Ingredient 2 :"), prompt("Ingredient 3 :")];
console.log(ingredients);
orderPasta(...ingredients)

// Since ES 2018, the spread operator actually also works on objects.
let newGeneralStore = { ...generalStore, founder: "Josep Maria" }
console.log(newGeneralStore);
