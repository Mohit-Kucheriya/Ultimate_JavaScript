/*

Enhanced Object Literals - 
Three ways -

1. Property Shorthand -
If the property name and the variable name are the same, 
you can use a shorthand syntax to define object properties.

2. Method Shorthand -
Define methods directly without using the function keyword.

3. Computed Property Names -
Use dynamic property names by wrapping expressions in square brackets [].

*/

const weekDays = ["monday", "tuesday", "wednesday"];

const openingHours = {
    [weekDays[0]]: {
        open: "9:00 am",
        close: "5:00 pm",
    },
    [weekDays[1]]: {
        open: "9:00 am",
        close: "5:00 pm",
    },
    [weekDays[2]]: {
        open: "9:00 am",
        close: "5:00 pm",
    },
};

const restaurant = {
    name: "Pizza Hut",
    categories: ["pizza", "salad", "dessert"],
    startMenu: ["Hot chocolate", "Pepperoni Pizza", "Garlic bread"],
    openingHours,

    orderingFood(startMenuIndex) {
        console.log(`You ordered ${this.startMenu[startMenuIndex]}`);
    },
};
console.log(restaurant);

restaurant.orderingFood(2);
