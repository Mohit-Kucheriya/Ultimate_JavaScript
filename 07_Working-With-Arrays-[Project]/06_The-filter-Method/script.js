/*

filter() method is used to filter for elements that statisfy a certain condition.  

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const deposits = movements.filter(function (move) {
    return move > 0;
});
console.log(`Deposits :`, deposits);

const withdrawals = movements.filter(function (move) {
    return move < 0;
});
console.log(`Withdrawals :`, withdrawals);
