/*

1. Looping Array- Always initialize the counter variable with 0, because the array is zero base when it comes to reading the elements out of the array. 

Note - While defining the condition, always use the length property of the array to get the number of elements in the array. We dont have to hard code the number of elements.

Syntax:

for (let counter = 0; counter < array.length; counter++) {
    // code
}

2. Break - To completely terminate the whole loop.

Syntax:

for (let counter = 0; counter < array.length; counter++) {
    // code
    if (condition) {
        break;
    }
}

3. Continue - To exit or skip the current iteration of the loop and continue to the next one.

Syntax:

for (let counter = 0; counter < array.length; counter++) {
    // code
    if (condition) {
        continue;
    }
}

*/

const mohitArray = [
    "Mohit",
    "Kucheriya",
    2024 - 2001,
    ["Game of Thrones", "The Walking Dead", "Stranger Things"],
    true,
];

const types = [];

for (let i = 0; i < mohitArray.length; i++) {
    console.log(mohitArray[i], typeof mohitArray[i]);

    // types.push(typeof mohitArray[i])

    types[i] = typeof mohitArray[i]; // We can also use this way to add the types to the array.
}

console.log(types);

const years = [1999, 2001, 2014, 2023];

const age = [];

for (let i = 0; i < years.length; i++) {
    console.log(years[i]);

    age.push(2024 - years[i]);
}

console.log(age);

// continue
for (let i = 0; i < mohitArray.length; i++) {
    if (typeof mohitArray[i] !== "string") {
        continue;
    }
    console.log(mohitArray[i], typeof mohitArray[i]);
}


// break
for (let i = 0; i < mohitArray.length; i++) {
    if (typeof mohitArray[i] === "number") {
        break;
    }
    console.log(mohitArray[i], typeof mohitArray[i]);
}

