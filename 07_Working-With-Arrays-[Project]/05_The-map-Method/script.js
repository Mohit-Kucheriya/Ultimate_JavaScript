/*

map() method is used to create a new array from an existing array, i.e. it returns a new array 
with the same length as the original array, but with each element replaced by the result of 
calling a provided function on that element.

It does not mutate the original array, but returns a new array.

NOTE - It's the map method who we'll call the callback function for each element of the array.

*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToDollar = 1.1;

const convertedMovements = movements.map((move) => move * euroToDollar);

console.log(movements);
console.log(convertedMovements);

const convertedMovements2 = movements.map(
    (move, i) =>
        `Movement ${i + 1}: You ${move > 0 ? "deposited" : "withdrew"} ${Math.abs(
            move
        )}`
);

console.log(convertedMovements2);
