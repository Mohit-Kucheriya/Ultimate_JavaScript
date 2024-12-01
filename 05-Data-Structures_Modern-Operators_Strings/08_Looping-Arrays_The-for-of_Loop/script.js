/*

Looping Arrays - The for-of Loop
1. for-of loop automatically iterates over the entire array,
and in each iteration, it will give us access to the current array element.

Syntax -

for (let variable of array) {
    // code
}

2. We can simply use continue and break keywords inside the loop.

*/

const generalStore = {
    name: "General Store",
    location: "Via del Corso, 1",
    item: ["Soaps", "Shampoos", "Body Lotions", "Deodorants"],
    snacks: ["Chips", "Potato Chips", "Hot Dogs", "Fries"],
};

const allItems = [...generalStore.item, ...generalStore.snacks];
console.log(allItems);

// Using for loop
for (let i = 0; i < allItems.length; i++) {
    console.log(allItems[i]);
}

// Using for-of loop
for (let item of allItems) {
    console.log(item);
}

// item is the current array element in each iteration

/*

1. If we want to print the index of the current array element, we can use -
entries() method.

2. entries() method returns an array of arrays, where each inner array contains
the index and the value of the current array element.

Returns - An iterator of [index, value] pairs.

Each - .next() call gives an object { value: [index, value], done: boolean }.

Often used with for...of or converted into an array for easier handling.

*/

for (let [index, value] of allItems.entries()) {
    console.log(index, value);
}

const fruits = ["Apple", "Banana", "Orange", "Mango"];

for (const [fruitId, fruit] of fruits.entries()) {
    console.log(fruitId, fruit);
}
