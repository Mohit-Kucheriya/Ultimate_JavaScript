/*

Timers - setTimeout and setInterval

1. setTimeout(callback, delay) - executes the callback function after the delay milliseconds.
NOTE - The callback function is executed only once. And its not that the execution of code will be stoped, 
simply the callback will get registered and will be executed only after the delay time.

Callback Function - As we are not calling the callback funtion, it's the setTimeout method that will 
execute the callback function.

The callback function itself does not inherently have arguments unless -

1. You explicitly pass arguments to it via setTimeout.

2. It captures values from its surrounding scope (closure).


2. setInterval(callback, delay) - executes the callback function every delay milliseconds until we
stop it using clearInterval() method.

*/

// setTimeout
const ingredients = ["olive", "pepperoni", "onions", "tomatoes"];

const pizzaTimer = setTimeout(
    (ing1, ing2, ...ing3) => {
        console.log(
            `Here is your Pizza with ingredients ${ing1} and ${ing2} and the rest ${ing3}`
        );
    },
    3000,
    ...ingredients
);
console.log("Waiting..");

if (ingredients.includes("mushrooms")) {
    clearTimeout(pizzaTimer);
    console.log("Cleared");
}

// setInterval
setInterval(() => {
    const now = new Date();
    const hours = `${now.getHours()}`.padStart(2, 0);
    const minutes = `${now.getMinutes()}`.padStart(2, 0);
    const seconds = `${now.getSeconds()}`.padStart(2, 0);
    console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);
