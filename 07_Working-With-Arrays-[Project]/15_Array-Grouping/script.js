/*

Array Grouping - 
A new feature was inroduced in ES2024 called array grouping. We do array grouping by doing 
Object.groupBy(). 

It takes two arguments, the first is the array and the second is a callback function and in returns 
an object with the key as the value returned by the callback function and the value as the number of 
times the key was returned.

NOTE - The callback function loops through the array

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupedMovements = Object.groupBy(movements, (movement) =>
    movement > 0 ? "deposit" : "withdrawal"
);
console.log(groupedMovements);

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    type:"premium"
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    type:"standard"
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    type:"premium"
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    type:"basic"
};

const accounts = [account1, account2, account3, account4];

const groupAllMovementsAccount = Object.groupBy(accounts, (account) => {
    const movementCount = account.movements.length;
    if (movementCount >= 8) return "Very Active";
    else if (movementCount >= 4) return "Active";
    else if (movementCount >= 2) return "Moderate";
    else return "Inactive";
});

console.log(groupAllMovementsAccount);

const groupByType = Object.groupBy(accounts, (account) => {
    return account.type
})
console.log(groupByType);

