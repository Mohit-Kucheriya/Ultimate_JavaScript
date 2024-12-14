/*

reduce() method is used to essentially boil down all the elements in an array to a single value.

The callback function takes two arguments - the accumulator and the current value i.e. first is the 
accumulator, and the second is the current value.
The accumulator is the value returned by the previous callback function call.

NOTE - reduce() method has two parameters - the callback function and the initial value of the 
accumulator. The initial value for the first iteration 

NOTE - In reduce() method, we always have to somehow return the accumulator value to the next iteration.
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, move, idx) {
    console.log(`Iteration ${idx} : ${acc} + ${move} = ${acc + move}`);
    return acc + move;
}, 0);
console.log(balance);

// Using for...of loop we need to create the extra variable
let balance2 = 0;
for (const move of movements) {
    balance2 += move;
}
console.log(balance2);

const balance3 = movements.reduce((acc, move) => acc + move, 0);
console.log(balance3);

// Finding the maximum value
const maximumVal = movements.reduce(function (acc, move) {
    if (acc > move) {
        return acc;
    } else {
        return move; // Return the current value so that the accumulator will be updated
    }
}, movements[0]);
console.log(`Maximum value : ${maximumVal}`);

// Finding the minimum value
const minimumVal = movements.reduce(
    (acc, move) => (acc < move ? acc : move),
    movements[0]
);
console.log(`Minimum value : ${minimumVal}`);
