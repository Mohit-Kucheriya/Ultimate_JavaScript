/*

We can chain methods together as long as they return new arrays.

NOTE - Chaining methods is a very powerful technique, and it's a best practice to use it but remember 
we can only chain methods that return new arrays, after reduce() method we can't chain methods.
Because reduce() method returns a single value, and we can't chain methods after it.

NOTE - If we want to debug the array, each method's callback function provide the current value, 
the index, and the array. So we can use that to debug the array.

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToDollar = 1.1;

const totalDepositsUSD = movements
    .filter((move) => move > 0)
    .map((move) => move * euroToDollar)
    .reduce((acc, move) => acc + move, 0)
    .toFixed(2);
console.log(`Total deposits in USD : ${totalDepositsUSD}`);
