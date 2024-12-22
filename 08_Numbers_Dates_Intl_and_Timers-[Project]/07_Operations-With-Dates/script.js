/*

We can do calculations with dates as well. We can add, subtract, compare, and so on.
For example, we can subtract two dates to get the difference in days.

If we want the precise edge case, we can use moment.js library. It's a popular library for working with dates.

*/

const futureDate = new Date(2037, 11, 22, 10, 20);
console.log(+futureDate);

const calDaysPassed = (date1, date2) =>
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const day1 = calDaysPassed(new Date(2037, 10, 10), new Date(2037, 10, 20))
console.log(day1);
