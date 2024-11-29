"use strict";

/*

Destructuring Arrays - 
1. A way of unpacking values from an array or object into separate variables.

2. We use '[]' to destructure an array.

3. Basically, declare the variables inside the '[]' and then assign the values from the array to the variables.

Syntax -

let [variable1, variable2, variable3] = array;

4. If we want to skip a value from the array, we can use a comma ',' to skip the value.

*/

// Before Destructuring
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// After Destructuring
const [val1, val2, val3] = arr;

const resturant = {
    name: "The Resturant",
    location: "Via del Corso, 1",
    categories: ["Italian", "Vegetarian", "Organic"],
    startMenu: ["Focaccia", "Pizza", "Pasta", "Gelato", "Tiramisu"],
    mainMenu: ["Bread", "Risotto", "Caprese Salad"],

    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const [firstCat, secondCat] = resturant.categories;
console.log(firstCat); // Italian
console.log(secondCat); // Vegetarian

let [firstMenu, , lastMenu] = resturant.startMenu;
console.log(firstMenu); // Focaccia
console.log(lastMenu); // Pasta

/*

Switching the variables using destructuring

1. In order to switch to two variables using destructuring, 

[firstMenu, lastMenu] = [lastMenu, firstMenu];

*/

[firstMenu, lastMenu] = [lastMenu, firstMenu];
console.log(firstMenu); // Pasta
console.log(lastMenu); // Focaccia

// Receive 2 return values from a function
const [starterCourse, mainCourse] = resturant.order(2, 1);
console.log(starterCourse); // Pasta
console.log(mainCourse); // Risotto

/*

Nested Array Destructuring - 
1. We have to essentially do the destructuring inside the destructuring.

Syntax -

let [nested1, [nested2, nested3]] = nested;

*/

const nested = [2, 4, [6, 10]];
const [nested1, , [nested2, nested3]] = nested;
console.log(nested1); // 2
console.log(nested2); // 6
console.log(nested3); // 10

/*

Setting Default Values - 
1. We can set default values for variables using destructuring.

2. Destructuring allows you to assign default values to variables if the values being destructured are undefined

*/

const [p = 1, q = 1, r = 1] = [10, 20]
console.log(p); // 10
console.log(q); // 20
console.log(r); // 1