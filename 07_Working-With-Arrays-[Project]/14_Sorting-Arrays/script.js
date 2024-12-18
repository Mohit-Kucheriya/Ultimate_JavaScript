/*

sort() - 
It sorts the array in ascending order. It mutates the original array.
NOTE - It does sorting based on strings.

To fixed this by passing in a compare callback function. The callback function takes two arguments i.e. the current value and the next value.

NOTE - If the arrays are mixed with numbers and strings then sort() method simply don't work.

*/

const ownerArr = ["John", "Adam", "Jessica", "Steven", "Sarah", "Michael"];
console.log(ownerArr.sort());
console.log(ownerArr);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
return < 0, A, B (Keep order as it is)
return > 0, B, A (Switch order)
*/

// Ascending order
movements.sort((a, b) => a - b)
console.log(movements);

// Descending order
movements.sort((a, b) => b - a)
console.log(movements);


