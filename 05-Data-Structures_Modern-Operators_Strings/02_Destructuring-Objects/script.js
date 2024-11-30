/*

Destructuring Objects - 
1. A way of unpacking values from an object into separate variables.

2. We use '{}' to destructure an object.

3. We have to do is to provide the variable names that exactly match the property name of the object.

4. In objects, the order of elements does not matter.

5. We don't need to manually skip elements, like we did in arrays.

Syntax -

let {variable1, variable2, variable3} = object;

*/

const resturant = {
    resturantName: "The Resturant",
    location: "Via del Corso, 1",
    categories: ["Italian", "Vegetarian", "Organic"],
    startMenu: ["Focaccia", "Pizza", "Pasta", "Gelato", "Tiramisu"],
    mainMenu: ["Bread", "Risotto", "Caprese Salad"],

    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // Immediately destructing the object, and the names need to be exactly the same as the property names
    orderDelivery: function ({ starterIndex, mainIndex, deliveryTime, address }) {
        console.log(
            `The starter is ${this.startMenu[starterIndex]} and the main is ${this.mainMenu[mainIndex]}
      and will get delivered at ${deliveryTime} at ${address}`
        );
    },

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

const { resturantName, categories, openingHours } = resturant;
console.log(resturantName);
console.log(categories);
console.log(openingHours);

/*

1. Assigning different variables names to the existing properties.

2. Assigning default values to the variables. So that if the property is undefined, 
the default value will be assigned.

3. '=' is used to assign the default value.

*/

// Assigning different variable names
const { resturantName: shopName, categories: listOfCategories } = resturant;
console.log(shopName);
console.log(listOfCategories);

// Assigning default values
const { menu = [], startMenu: starter = [] } = resturant;
console.log(menu);
console.log(starter);

// Mutating variables -

let a = 111;
let b = 37;

const obj = { a: 10, b: 7, c: 3 };
console.log(obj);

({ a, b } = obj);
console.log(a);
console.log(b);

/*

Nested Object Destructuring - 
1. We have to essentially do the destructuring inside the destructuring.

Syntax -

let {nested1: {nested2, nested3}} = nested;

*/

const {
    friday: { open, close },
} = resturant.openingHours;
console.log(open, close);

// Passing one agrgument, one object. 
const orderDeliveryObj = {
    starterIndex: 2,
    mainIndex: 1,
    deliveryTime: "22:30",
    address: "Via del Corso, 1",
};

resturant.orderDelivery(orderDeliveryObj);
console.log(orderDeliveryObj);
