/*

forEach() - 
1.Iterates over an array, requires a callback function.
forEach is a higher order function, which takes a callback function in order to tell it what to 
do with each element of the array.

2. In each iteration, it will execute the callback function with the current element as the argument.

3. The callback function itself takes three arguments - the current value, the index and the array.
Syntax - callbackFn(currentValue, index, array)
The order of the arguments is important. The first argument is the current value, the second is the 
index, and the third is the array.

NOTE - 
So here the forEach() will call the callback function for each element of the array.

Syntax -
array.forEach(callbackFn[, thisArg])

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using for...of loop
for (const [i, move] of movements.entries()) {
    if (move > 0) {
        console.log(`You deposited ${move} in your account for the ${i + 1} time.`);
    } else {
        console.log(
            `You withdrew ${Math.abs(move)} from your account for the ${i + 1} time.`
        );
    }
}

movements.forEach(function (move, i, arr) {
    if (move > 0) {
        console.log(`You deposited ${move} in your account for the ${i + 1} time.`);
    } else {
        console.log(
            `You withdrew ${Math.abs(move)} from your account for the ${i + 1} time.`
        );
    }
});

/*

Explanation - 
1. On each iteration, the callback function will be called with the current element as the argument.
i.e. at the first iteration 
0: function(200) {}
1: function(450) {}

2. Basically, the forEach() method is a higher order function, which takes a callback function in 
order to tell it what to do with each
element of the array.

*/

/*

In forEach we cannot break out of the loop, but we can use a return statement to exit the loop,
i.e. 'continue' and 'break' statements don't work with forEach().

*/
