/*

some() - 
It returns true if at least one element in the array satisfies the provided testing function.
Similar to includes() method, but in includes() it's a equality check, i.e. if certain element is 
present in the array, it returns true, if not, it returns false.

every() -
It returns true if all elements in the array satisfy the provided testing function.
i.e. if all elements satisfy the testing function, it returns true, if not, it returns false.

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Equality
const includesDeposits = movements.includes(3000);
console.log(includesDeposits);

// Some : Condition
const anyDeposits = movements.some((move) => move > 0);
console.log(anyDeposits); // true

// Every : Condition
const allDeposits = movements.every((move) => move > 0);
console.log(allDeposits); // false


