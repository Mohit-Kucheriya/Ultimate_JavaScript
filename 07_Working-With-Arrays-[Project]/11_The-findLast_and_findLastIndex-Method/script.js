/*

findLast() - 
It returns the last element in the array that satisfies the provided testing function.
It's start from the last element and returns the first element that satisfies the testing function.

findLastIndex() - 
It returns the index of the last element in the array that satisfies the provided testing function.
It's start from the last element and returns the index of the first element that satisfies the testing function.

NOTE - Both can be used to find the latest element i.e. last in the array.

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const lastWithdrawal = movements.findLast((move) => move < 0);
console.log(lastWithdrawal); // -130

const largestLatestMovementIndex = movements.findLastIndex(
    (move) => Math.abs(move) > 1000
);
console.log(
    `Your latest large movement was ${movements.length - largestLatestMovementIndex
    } movements ago`
);
