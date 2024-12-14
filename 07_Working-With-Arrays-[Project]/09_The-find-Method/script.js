/*

find() method is used to find the first element in an array that satisfies a certain condition.

NOTE - find() method only returns the element itself and not an array.
It's purpose is to find only one element in an array. Therefore we usually set up a condition
where only one element can satisfy that condition.

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((move) => move < 0);
console.log(movements);
console.log(`First withdrawal :`, firstWithdrawal);

