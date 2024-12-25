/*

Internationalizing Numbers - Intl
Its a API that provides a standard way to format and parse numbers in JavaScript.

Syntax -
new Intl.NumberFormat(locales, options).format(number)

Three different style are -
1. unit
2. currency
3. percent

*/

const number = 32648612186.12;
const options = {
    style: "currency",
    currency: "USD",
}

const options2 = {
    style: "unit",
    unit: "mile-per-hour",
}
console.log("US Format: ", new Intl.NumberFormat("en-US", options).format(number));

console.log("Arabic Format: ", new Intl.NumberFormat("ar-EG", options2).format(number));

console.log("Great Britain Format: ", new Intl.NumberFormat("en-GB", options).format(number));


