/*

Creating Dates -  Four ways to create a date in JavaScript. 
All they use the new Date() constructor function, but they can accept different parameters.

1. new Date() - creates a date object with the current date and time.

2. new Date(year, month, day, hours, minutes, seconds) - creates a date object 
with the given year, month, day, hours, minutes, seconds.
NOTE - month is zero-based i.e. 0 for January, 1 for February, etc.

NOTE - we can also pass the amount of milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC).

3. new Date(dateString) - creates a date object with the given date string.

4. new Date(milliseconds) - creates a date object with the given amount of milliseconds since the Unix Epoch.

*/

const now = new Date();
console.log(now);

console.log(new Date(`December 22, 2024`));

const getFull = new Date(2025, 11, 22, 10, 20, 30);
console.log(getFull); // Mon Dec 22 2025 10:20:30 GMT+0530 (India Standard Time)

const getMilli = new Date(0);
console.log(getMilli); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

console.log(new Date(3 * 24 * 60 * 60 * 1000));
/*

3 Days -

3 * 24 * 60 * 60 * 1000 = 3 * 86400000 = 259200000

1. 3 - days
2. 24 - hours
3. 60 - minutes
4. 60 - seconds
5. 1000 - milliseconds

*/

// Working with Dates
const futureDate = new Date(2037, 11, 22, 10, 20, 30);
console.log(futureDate);

console.log(`Year`, futureDate.getFullYear());
console.log(`Month`, futureDate.getMonth());
console.log(`Date`, futureDate.getDate());
console.log(`Week Day`, futureDate.getDay());
console.log(`Hours`, futureDate.getHours());
console.log(`Minutes`, futureDate.getMinutes());
console.log(`Seconds`, futureDate.getSeconds());

console.log(`TimeStamp`, futureDate.getTime()); // milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC)

console.log(new Date(2145070230000));

// Current TimeStamp
const currentTimeStamp = Date.now();
console.log(`Current TimeStamp`, currentTimeStamp);

const currentDate = new Date(currentTimeStamp);
console.log(`Current Date`, currentDate);
