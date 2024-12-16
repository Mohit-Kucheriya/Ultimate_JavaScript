/*

flat() -
It flattens the array i.e. it returns a new array with all the sub-arrays concatenated into a single array.
If we don't pass any argument, it will flatten the array to a single level.

Syntax -
flat(depth = 1)

NOTE - depth is the number of levels to flatten the array.

flatMap() -
It simply the combination of map() and flat(). It also needs to recieve a callback function.
NOTE - flatMap() only works on arrays of arrays i.e. single level of nesting.

*/

const arr1 = [1, 2, [3, 4], 5];
console.log(arr1.flat()); // [1, 2, 3, 4, 5]

const arrDeep = [1, 2, [3, 4], 5, [6, [7, 8]]];
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// Example
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const overAllBalance = accounts
    .map((account) => account.movements)
    .flat()
    .reduce((acc, move) => acc + move, 0);
console.log(overAllBalance);

const overAllBalance2 = accounts
    .flatMap((account) => account.movements)
    .reduce((acc, move) => acc + move, 0);
console.log(overAllBalance2);


