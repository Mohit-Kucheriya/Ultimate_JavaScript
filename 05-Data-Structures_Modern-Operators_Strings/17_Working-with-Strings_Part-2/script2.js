/*

Three methods that return the boolean value

1. startsWith() - Checks if the string starts with the specified value.

2. endsWith() - Checks if the string ends with the specified value.

3. includes() - Checks if the string includes the specified value.

*/

const plane = "Boeing 777";
const planeIncludes = plane.includes("ing 777");
console.log(planeIncludes); // true

const planeStartsWith = plane.startsWith("AirBus");
console.log(planeStartsWith); // false

const planeEndsWith = plane.endsWith("777");
console.log(planeEndsWith); // true

plane.startsWith("Boeing") && plane.endsWith("777")
    ? console.log("Valid plane")
    : console.log("Invalid plane");

const checkBabbage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes("knife") || baggage.includes("gun")) {
        return "Sorry you are not allowed to on board";
    } else {
        return "Welcome aboard";
    }
};
console.log(checkBabbage("I have some food and a pocket Knife"));

console.log(checkBabbage("Have some snacks"));

