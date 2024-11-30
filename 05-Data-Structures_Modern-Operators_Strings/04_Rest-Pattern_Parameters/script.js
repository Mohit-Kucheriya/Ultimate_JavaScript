/*

Rest Pattern -
1. Rest pattern looks exactly like the spread operator.

2. It does the opposite of the spread operator.

3. It takes multiple elements and condense them into an array.

4. It does not include any skip elements

*/

// Destructuring

const [a, b, ...others] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(others); // [30, 40, 50]

const generalStore = {
    name: "General Store",
    location: "Via del Corso, 1",
    item: ["Soaps", "Shampoos", "Body Lotions", "Deodorants"],
    snacks: ["Chips", "Potato Chips", "Hot Dogs", "Fries"],
};

/*

NOTE - 
1. Rest element must be the last element in the array.

2. There can only be one rest element in any destructuring assignment.

*/

const [genItem, , , , snackItem, ...otherItems] = [
    ...generalStore.item,
    ...generalStore.snacks,
];
console.log(genItem);
console.log(snackItem);
console.log(otherItems);

const resturant = {
    name: "The Resturant",
    location: "Via del Corso, 1",
    categories: ["Italian", "Vegetarian", "Organic"],
    startMenu: ["Focaccia", "Pizza", "Pasta", "Gelato", "Tiramisu"],
    mainMenu: ["Bread", "Risotto", "Caprese Salad"],
    openingHours: {
        wednesday: {
            open: "10:00",
            close: "18:00",
        },
        thursday: {
            open: "11:00",
            close: "18:00",
        },
        friday: {
            open: "12:00",
            close: "18:00",
        },
    },
};

const { friday, ...otherWeekdays } = resturant.openingHours;
console.log(friday);
console.log(otherWeekdays);

// Passing multiple arguments
const add = function (...numbers) { // Rest parameter, takes all the arguments

    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
};

console.log(add(2, 3));
console.log(add(2, 234, 658, 1672, 452));

const x = [11, 22, 33, 44, 55];
console.log(add(...x)); // Spread operator

/*

Explanation -

1. "The rest operator (...) collects all remaining arguments passed to a function 
and packs them into an array, which can be accessed as a single parameter."

*/
